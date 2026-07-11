// Seeds the MTH1W question bank with 50+ generated questions PER topic.
// Answers are computed in code (incl. a monomial engine for exponent laws),
// so they're correct by construction. Run AFTER the question_bank migration.
// Usage: node scripts/seed-bank.mjs   (re-runnable)

import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

// ── helpers ──────────────────────────────────────────────────
const L = "abcdefghij";
const shuffle = (a) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; };
function reduce(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return [n, d]; }
const fracStr = (n, d) => { [n, d] = reduce(n, d); return d === 1 ? `${n}` : `${n}/${d}`; };
const fracTex = (n, d) => { [n, d] = reduce(n, d); if (d === 1) return `${n}`; const s = n < 0 ? "-" : ""; return `${s}\\frac{${Math.abs(n)}}{${d}}`; };

const mc = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_choice", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: L[correct], points: 1, feedback });
const mcA = (difficulty, prompt, correct, distractors, feedback = "") => { const opts = shuffle([correct, ...distractors.filter((d) => d !== correct)]).slice(0, 4); if (!opts.includes(correct)) opts[0] = correct; const o = shuffle(opts); return { difficulty, kind: "multiple_choice", prompt, choices: o.map((t, i) => ({ id: L[i], text: t })), answer: L[o.indexOf(correct)], points: 1, feedback }; };
const ms = (difficulty, prompt, choices, correct, feedback = "") => ({ difficulty, kind: "multiple_select", prompt, choices: choices.map((t, i) => ({ id: L[i], text: t })), answer: correct.map((i) => L[i]), points: 1, feedback });
const tf = (difficulty, prompt, correct, feedback = "") => ({ difficulty, kind: "true_false", prompt, answer: correct ? "true" : "false", points: 1, feedback });
const num = (difficulty, prompt, value, tol = 0, feedback = "") => ({ difficulty, kind: "numeric", prompt, answer: value, tolerance: tol, points: 1, feedback });
const fill = (difficulty, prompt, accepted, feedback = "") => ({ difficulty, kind: "fill_blank", prompt, answer: accepted, points: 1, feedback });
const order = (difficulty, prompt, items, feedback = "") => ({ difficulty, kind: "ordering", prompt, choices: items, answer: items.map((_, i) => i), points: 1, feedback });
const match = (difficulty, prompt, left, right, answer, feedback = "") => ({ difficulty, kind: "matching", prompt, choices: { left, right }, answer, points: 1, feedback });

// monomial: { c, x, y } → LaTeX
function mono(c, x, y) {
  if (c === 0) return "0";
  const exp = (e) => (e === 1 ? "" : `^{${e}}`);
  let s = "";
  if (c !== 1 || (x === 0 && y === 0)) s += `${c}`;
  if (x !== 0) s += `x${exp(x)}`;
  if (y !== 0) s += `y${exp(y)}`;
  return s || "1";
}

// ── 1.1 Number Sets ──────────────────────────────────────────
export function gen11() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice (one correct)
  q.push(mc("easy", "Which of the following is a natural number?", ["$-3$", "$0$", "$\\frac{4}{2}$", "$\\sqrt{2}$"], 2));
  q.push(mc("easy", "The set of integers includes all of the following EXCEPT:", ["$-5$", "$0$", "$\\frac{1}{3}$", "$100$"], 2));
  q.push(mc("easy", "Which number is a rational number but not an integer?", ["$6$", "$-4$", "$\\frac{7}{2}$", "$\\sqrt{9}$"], 2));
  q.push(mc("easy", "Which set does $0$ belong to?", ["Natural numbers", "Whole numbers", "Irrational numbers", "None of these"], 1));
  q.push(mc("easy", "$\\sqrt{16}$ is a member of:", ["Natural numbers only", "Whole numbers only", "Integers only", "Natural, whole, integers, and rational numbers"], 3));
  // multiple select (one or more correct)
  q.push(ms("easy", "Which of these are irrational numbers?", ["$\\pi$", "$3.14$", "$\\sqrt{2}$", "$\\frac{22}{7}$"], [0, 2]));
  q.push(ms("easy", "Choose the rational numbers.", ["$0.\\overline{3}$", "$\\sqrt{25}$", "$\\sqrt{3}$", "$-5$"], [0, 1, 3]));
  q.push(ms("easy", "Which numbers belong to the set of whole numbers?", ["$0$", "$1$", "$-1$", "$100$"], [0, 1, 3]));
  q.push(ms("easy", "Which subsets of the real numbers contain $-\\frac{9}{3}$?", ["Integers", "Whole numbers", "Natural numbers", "Rational numbers"], [0, 3]));
  q.push(ms("easy", "Which statements are true?", ["Every natural number is an integer", "Every integer is a whole number", "Every whole number is a rational number", "$\\sqrt{2}$ is a real number"], [0, 2, 3]));
  // true / false
  q.push(tf("easy", "$-7$ is a natural number.", false));
  q.push(tf("easy", "$0$ is a whole number.", true));
  q.push(tf("easy", "Every integer is a rational number.", true));
  q.push(tf("easy", "$\\sqrt{9}$ is an irrational number.", false, "$\\sqrt{9}=3$, which is rational."));
  q.push(tf("easy", "The set of real numbers includes both rational and irrational numbers.", true));
  // fill in the blank
  q.push(fill("easy", "The smallest natural number is ___.", ["1"]));
  q.push(fill("easy", "The set of ___ numbers includes $0, 1, 2, 3, \\dots$", ["whole"]));
  q.push(fill("easy", "An example of an irrational number between 3 and 4 is ___.", ["pi", "\\pi", "π", "sqrt(10)", "\\sqrt{10}", "√10"]));
  q.push(fill("easy", "The number $-3$ belongs to the set of ___ numbers.", ["integers", "integer", "rational"]));
  q.push(fill("easy", "$\\frac{5}{1}$ is a rational number and also an ___.", ["integer", "integers"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Which of the following is a rational number but NOT an integer?", ["$\\frac{-12}{4}$", "$0$", "$\\frac{9}{2}$", "$\\sqrt{49}$"], 2));
  q.push(mc("medium", "Which set is closed under addition?", ["Natural numbers", "Irrational numbers", "Integers", "Whole numbers"], 2));
  q.push(mc("medium", "How many integers are between $-3.5$ and $2.4$?", ["5", "6", "7", "4"], 1, "Integers: $-3, -2, -1, 0, 1, 2$."));
  q.push(mc("medium", "Which of the following is FALSE?", ["$\\sqrt{25} \\in \\mathbb{N}$", "$0.\\overline{6} \\in \\mathbb{Q}$", "$\\pi \\in \\mathbb{Q}$", "$-3 \\in \\mathbb{Z}$"], 2));
  q.push(mc("medium", "The product of two irrational numbers is always:", ["Irrational", "Rational", "Sometimes irrational, sometimes rational", "An integer"], 2));
  q.push(ms("medium", "Which of these numbers are rational?", ["$0.1010010001\\ldots$ (non-repeating)", "$0.\\overline{12}$", "$\\sqrt{50}$", "$\\frac{\\sqrt{4}}{\\sqrt{9}}$"], [1, 3]));
  q.push(ms("medium", "Which numbers are in $\\mathbb{Z} \\cap \\mathbb{Q}^+$ (positive integers)?", ["$-2$", "$0$", "$5$", "$\\frac{8}{2}$"], [2, 3]));
  q.push(ms("medium", "Which are true about $\\sqrt{18}$?", ["Irrational", "Real", "Rational", "Between 4 and 5"], [0, 1, 3]));
  q.push(ms("medium", "Classify $-\\frac{25}{5}$. Select all that apply.", ["Integer", "Whole number", "Rational", "Irrational"], [0, 2]));
  q.push(ms("medium", "Which of the following are subsets of the rational numbers?", ["Integers", "Whole numbers", "Natural numbers", "Irrational numbers"], [0, 1, 2]));
  q.push(tf("medium", "Every rational number is an integer.", false));
  q.push(tf("medium", "$\\sqrt{0.04}$ is rational.", true, "$\\sqrt{0.04}=0.2$."));
  q.push(tf("medium", "$\\sqrt{2} + \\sqrt{3}$ is irrational.", true));
  q.push(tf("medium", "The set of whole numbers is a subset of the integers.", true));
  q.push(tf("medium", "If a number is real, it must be either rational or irrational.", true));
  q.push(fill("medium", "The number of integers between $-1.8$ and $3.9$ is ___.", ["5"], "Integers: $-1, 0, 1, 2, 3$."));
  q.push(fill("medium", "$\\frac{\\sqrt{36}}{\\sqrt{4}}$ simplifies to an ___.", ["integer", "integers"]));
  q.push(fill("medium", "A number that is real but not rational is called ___.", ["irrational"]));
  q.push(fill("medium", "$\\sqrt{50}$ simplified is $5\\sqrt{2}$ and belongs to the set of ___ numbers.", ["irrational"]));
  q.push(fill("medium", "If $x = 0.333\\ldots$, then $x$ in fraction form is ___.", ["1/3", "\\frac{1}{3}"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Which of the following is ALWAYS true?", ["The sum of two irrationals is irrational", "The product of a nonzero rational and an irrational is irrational", "The product of two irrationals is rational", "The difference of two integers is a natural number"], 1));
  q.push(mc("hard", "$\\sqrt{72} + \\sqrt{2}$ simplifies to a:", ["Rational number", "Integer", "Irrational number", "Whole number"], 2, "$\\sqrt{72}=6\\sqrt{2}$, so the sum is $7\\sqrt{2}$."));
  q.push(mc("hard", "How many elements are in $\\mathbb{N} \\cap \\mathbb{Z}$?", ["Finite", "Infinite", "0", "1"], 1, "$\\mathbb{N} \\cap \\mathbb{Z} = \\mathbb{N}$, which is infinite."));
  q.push(mc("hard", "$0.999\\ldots$ is equal to:", ["Less than 1", "Exactly 1", "Undefined", "Greater than 1"], 1));
  q.push(mc("hard", "If $x = \\sqrt{3} + \\sqrt{2}$ and $y = \\sqrt{3} - \\sqrt{2}$, then $x \\cdot y$ is:", ["Irrational", "Rational", "Integer", "Irrational and integer"], 1, "$xy = 3 - 2 = 1$."));
  q.push(ms("hard", "Which of the following are irrational?", ["$\\sqrt{0.25}$", "$\\sqrt{8}$", "$\\pi^2$", "$\\frac{\\sqrt{12}}{\\sqrt{3}}$"], [1, 2]));
  q.push(ms("hard", "Which numbers belong to the set $\\mathbb{Q} \\setminus \\mathbb{Z}$?", ["$\\frac{9}{3}$", "$-0.5$", "$2.\\overline{3}$", "$0$"], [1, 2]));
  q.push(ms("hard", "Select all true statements.", ["$\\sqrt{2}$ is between 1.41 and 1.42", "$\\sqrt{4}$ is irrational", "$\\pi$ is between 3.14 and 3.15", "Every integer is a real number"], [0, 2, 3]));
  q.push(ms("hard", "Which are correct subset relationships?", ["$\\mathbb{N} \\subset \\mathbb{W} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$", "$\\mathbb{Z} \\subset \\mathbb{Q}$", "$\\mathbb{Q} \\subset \\mathbb{R}$", "$\\mathbb{R} \\subset \\mathbb{Q}$"], [0, 1, 2]));
  q.push(ms("hard", "Which of the following are rational?", ["$0.123456789101112\\ldots$ (Champernowne constant)", "$0.\\overline{142857}$", "$\\sqrt{1.44}$", "$\\sqrt{5}$"], [1, 2]));
  q.push(tf("hard", "$\\sqrt{6} \\times \\sqrt{24}$ is an integer.", true, "$\\sqrt{6}\\times\\sqrt{24}=\\sqrt{144}=12$."));
  q.push(tf("hard", "The sum of any two rational numbers is rational.", true));
  q.push(tf("hard", "$\\sqrt{5} - \\sqrt{5}$ is irrational.", false, "It equals $0$, which is rational."));
  q.push(tf("hard", "If $a$ and $b$ are irrational, then $a+b$ is always irrational.", false, "Counterexample: $\\sqrt{2} + (-\\sqrt{2}) = 0$."));
  q.push(tf("hard", "Every real number has a decimal expansion that either terminates or repeats.", false, "Irrational numbers are non-terminating and non-repeating."));
  q.push(fill("hard", "Numbers that cannot be expressed as $\\frac{p}{q}$ with $q \\neq 0$ are called ___.", ["irrational"]));
  q.push(fill("hard", "If $x$ is rational and $y$ is irrational, then $x + y$ is always ___.", ["irrational"]));
  q.push(fill("hard", "Express $0.3\\overline{45}$ as a fraction in simplest form: ___.", ["19/55", "\\frac{19}{55}"]));
  q.push(fill("hard", "The smallest positive rational number is ___.", ["none", "does not exist", "doesn't exist", "there is none", "no smallest"]));
  q.push(fill("hard", "True or False: “All rational numbers are real.” ___", ["true", "yes"]));

  return q;
}

// ── 1.2 Density, Infinity & Limit ────────────────────────────
function gen12() {
  const q = [];
  // limit of geometric sequence with |r|<1 → 0
  for (const r of ["\\frac{1}{2}", "\\frac{1}{3}", "\\frac{1}{4}", "\\frac{1}{5}", "\\frac{2}{3}", "\\frac{3}{4}"])
    q.push(mc("medium", `What is the limit of the sequence $1, ${r}, (${r})^2, (${r})^3, \\dots$?`, ["1", "0", "Infinity", "It has no limit"], 1));
  // midpoint of two numbers
  const pairs = [[1, 3], [2, 6], [0, 5], [3, 8], [-2, 4], [10, 20], [1, 2], [4, 7], [-6, -2], [5, 12]];
  for (const [a, b] of pairs) { const m = (a + b) / 2; q.push(num("easy", `Find the midpoint of $${a}$ and $${b}$.`, m, 0)); }
  // midpoint of decimals
  for (const [a, b] of [[0.6, 0.8], [0.2, 0.4], [0.7, 0.71], [1.4, 1.6], [0.1, 0.2]]) q.push(num("medium", `Find a number exactly between $${a}$ and $${b}$.`, Math.round(((a + b) / 2) * 1000) / 1000, 0.0005));
  // how many integers strictly between
  for (const [a, b] of [[0, 1], [1, 2], [-1, 0], [5, 6]]) q.push(num("easy", `How many integers are strictly between $${a}$ and $${b}$?`, 0, 0));
  for (const [a, b] of [[0, 5], [1, 10], [-3, 3]]) q.push(num("medium", `How many integers are strictly between $${a}$ and $${b}$?`, b - a - 1, 0));
  // nth term of halving sequence 100,50,...
  for (const start of [100, 80, 64, 48, 200, 32]) { for (const n of [4, 5]) { const term = start / Math.pow(2, n - 1); q.push(num("hard", `In $${start}, ${start / 2}, ${start / 4}, \\dots$ (each term half the last), what is term #${n}?`, term, 0)); } }
  // density true/false + concept
  q.push(tf("easy", "Between any two different fractions there is always another fraction.", true));
  q.push(tf("medium", "A sequence must eventually equal its limit.", false));
  q.push(tf("easy", "The natural numbers form an infinite set.", true));
  q.push(tf("medium", "There are infinitely many real numbers between 0 and 1.", true));
  q.push(tf("hard", "The integers are dense (between any two there is always another integer).", false));
  q.push(fill("medium", "The value a sequence gets closer and closer to is its ___.", ["limit"]));
  q.push(order("hard", "Order from least dense to most dense.", ["Integers", "Rationals", "Reals"]));
  q.push(mc("hard", "Which set is dense between 0 and 1?", ["The integers", "The whole numbers", "The rational numbers", "None of them"], 2));
  for (const r of ["\\frac{1}{6}", "\\frac{4}{5}", "\\frac{1}{10}"]) q.push(mc("medium", `What is the limit of $1, ${r}, (${r})^2, \\dots$?`, ["1", "0", "Infinity", "No limit"], 1));
  for (const [a, b] of [[7, 9], [2, 12], [-4, 4], [8, 14]]) q.push(num("easy", `Find the midpoint of $${a}$ and $${b}$.`, (a + b) / 2, 0));
  // extra hard: limits approaching a nonzero value, density of rationals/irrationals
  q.push(mc("hard", "What value does the sequence $0.9, 0.99, 0.999, 0.9999, \\dots$ approach?", ["$0.9$", "$1$", "$0.99$", "It has no limit"], 1, "Each term adds another 9; the terms close in on $1$."));
  q.push(num("hard", "A sequence starts at $2$ and each step moves halfway to $3$: $2, 2.5, 2.75, 2.875, \\dots$. What is its limit?", 3, 0, "The gap to $3$ halves each time, shrinking toward $0$."));
  q.push(mc("hard", "Which fraction lies exactly halfway between $\\frac{1}{3}$ and $\\frac{1}{2}$?", ["$\\frac{5}{12}$", "$\\frac{2}{5}$", "$\\frac{1}{4}$", "$\\frac{3}{5}$"], 0, "The midpoint is $\\left(\\tfrac13+\\tfrac12\\right)\\div 2 = \\tfrac{5}{12}$."));
  q.push(ms("hard", "Between $0$ and $1$, which statements are true?", ["There are infinitely many rational numbers", "There are infinitely many irrational numbers", "There are infinitely many real numbers", "There are only finitely many fractions"], [0, 1, 2]));
  q.push(tf("hard", "The repeating decimal $0.4\\overline{9}$ (that is $0.4999\\dots$) is equal to $0.5$.", true, "The terms $0.49, 0.499, \\dots$ approach exactly $0.5$."));
  return q;
}

// ── 1.3 Powers & Scientific Notation ─────────────────────────
export function gen13() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "$5^3$ equals:", ["$15$", "$125$", "$8$", "$243$"], 1));
  q.push(mc("easy", "$2^{-3}$ equals:", ["$-8$", "$\\frac{1}{8}$", "$8$", "$-6$"], 1));
  q.push(mc("easy", "$4.5 \\times 10^4$ in standard form is:", ["$0.00045$", "$45{,}000$", "$450$", "$4{,}500$"], 1));
  q.push(mc("easy", "$0.00076$ in scientific notation is:", ["$7.6 \\times 10^{-4}$", "$7.6 \\times 10^{-3}$", "$7.6 \\times 10^{4}$", "$7.6 \\times 10^{3}$"], 0));
  q.push(mc("easy", "$(2^3)^2$ simplifies to:", ["$2^5$", "$2^6$", "$2^1$", "$2^9$"], 1));
  // multiple select
  q.push(ms("easy", "Which expressions equal $64$?", ["$8^2$", "$4^3$", "$2^6$", "$64^1$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are equal to $10^{-2}$?", ["$0.01$", "$\\frac{1}{100}$", "$-20$", "$0.1$"], [0, 1]));
  q.push(ms("easy", "Which numbers are written in correct scientific notation?", ["$3.2 \\times 10^5$", "$32 \\times 10^4$", "$0.32 \\times 10^6$", "$9.99 \\times 10^{-3}$"], [0, 3]));
  q.push(ms("easy", "Which simplify to $x^5$?", ["$x^2 \\cdot x^3$", "$\\frac{x^6}{x}$", "$(x^5)^1$", "$x^2 + x^3$"], [0, 1, 2]));
  q.push(ms("easy", "Which statements about $3^0$ are true?", ["Equals $0$", "Equals $1$", "Equals $3$", "Any nonzero number to the power zero equals $1$"], [1, 3]));
  // true / false
  q.push(tf("easy", "$10^5$ is greater than $10^4$.", true));
  q.push(tf("easy", "$5.2 \\times 10^3 = 5200$.", true));
  q.push(tf("easy", "$2^4 \\times 2^5 = 2^{20}$.", false, "It equals $2^{9}$."));
  q.push(tf("easy", "$4^{-1} = -4$.", false, "$4^{-1} = \\frac{1}{4}$."));
  q.push(tf("easy", "$0.0005 = 5 \\times 10^{-4}$.", true));
  // fill in the blank
  q.push(fill("easy", "$7^2 = $ ___.", ["49"]));
  q.push(fill("easy", "$10^{-3}$ as a decimal is ___.", ["0.001"]));
  q.push(fill("easy", "$3.2 \\times 10^5$ in standard form is ___.", ["320000", "320,000"]));
  q.push(fill("easy", "$6.78 \\times 10^{-2}$ in standard form is ___.", ["0.0678"]));
  q.push(fill("easy", "In $\\frac{5^8}{5^3} = 5^{\\,?}$, the missing exponent is ___.", ["5"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Simplify $\\frac{4^5 \\times 4^3}{4^2}$:", ["$4^6$", "$4^5$", "$4^8$", "$4^{10}$"], 0, "$4^{5+3-2} = 4^6$."));
  q.push(mc("medium", "$(2.5 \\times 10^3) \\times (4 \\times 10^{-2})$ in scientific notation is:", ["$1 \\times 10^2$", "$10$", "$1 \\times 10^1$", "$100$"], 0, "$10 \\times 10^1 = 1 \\times 10^2$."));
  q.push(mc("medium", "Which is largest?", ["$2^{10}$", "$10^3$", "$5^5$", "$3^6$"], 2, "$5^5 = 3125$ is the largest ($2^{10}=1024$, $10^3=1000$, $3^6=729$)."));
  q.push(mc("medium", "$(3a^2b)^3$ simplifies to:", ["$27a^6b^3$", "$9a^5b^3$", "$27a^5b^3$", "$9a^6b^3$"], 0));
  q.push(mc("medium", "A dust particle has mass $7 \\times 10^{-10}$ kg. How many particles are in $3.5 \\times 10^{-4}$ kg?", ["$5 \\times 10^5$", "$5 \\times 10^6$", "$5 \\times 10^4$", "$5 \\times 10^{-6}$"], 0, "$\\frac{3.5 \\times 10^{-4}}{7 \\times 10^{-10}} = 0.5 \\times 10^6 = 5 \\times 10^5$."));
  q.push(ms("medium", "Which are equal to $6.02 \\times 10^{23}$?", ["$602{,}000{,}000{,}000{,}000{,}000{,}000{,}000$", "$60.2 \\times 10^{22}$", "$0.602 \\times 10^{24}$", "$602 \\times 10^{21}$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Simplify $\\left(\\frac{2x^3}{y^2}\\right)^4$. Select all equal forms.", ["$16x^{12}y^{-8}$", "$\\frac{16x^{12}}{y^8}$", "$16x^7y^2$", "$\\frac{8x^{12}}{y^8}$"], [0, 1]));
  q.push(ms("medium", "Which are true?", ["$(3^2)^3 = 3^6$", "$2^5 \\times 4^2 = 2^9$", "$10^3 \\div 10^{-2} = 10^5$", "$(2+3)^2 = 2^2 + 3^2$"], [0, 1, 2]));
  q.push(ms("medium", "Which numbers are strictly between $10^3$ and $10^4$?", ["$5{,}000$", "$9{,}999$", "$10^3$", "$10{,}001$"], [0, 1]));
  q.push(ms("medium", "If $a = 2 \\times 10^4$ and $b = 5 \\times 10^3$, which are equal to $a \\times b$?", ["$1 \\times 10^8$", "$10^8$", "$100{,}000{,}000$", "$10^7$"], [0, 1, 2]));
  q.push(tf("medium", "$(2^{-3})^{-2} = 64$.", true, "$2^{6} = 64$."));
  q.push(tf("medium", "$(3+4)^2 = 3^2 + 4^2$.", false));
  q.push(tf("medium", "$9.99 \\times 10^8$ is less than $1.00 \\times 10^9$.", true));
  q.push(tf("medium", "$8.0 \\times 10^{-5}$ is smaller than $7.9 \\times 10^{-5}$.", false));
  q.push(tf("medium", "$\\frac{1}{2^{-3}} = 8$.", true));
  q.push(fill("medium", "In $(5^2 \\times 5^3) \\div 5^4 = 5^{\\,?}$, the missing exponent is ___.", ["1"]));
  q.push(num("medium", "Light travels at $3 \\times 10^8$ m/s. How far does it travel in 10 s? (metres — you may type 3e9)", 3e9, 0));
  q.push(num("medium", "$(4.5 \\times 10^2) \\times (2 \\times 10^3) = ?$ (you may type 9e5)", 9e5, 0));
  q.push(num("medium", "$(6 \\times 10^5) \\div (3 \\times 10^{-2}) = ?$ (you may type 2e7)", 2e7, 0));
  q.push(fill("medium", "In $\\frac{2^{10} \\times 2^{-3}}{2^5} = 2^{\\,?}$, the missing exponent is ___.", ["2"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Simplify $\\frac{2^{n+3} \\cdot 3^{2n}}{6^{n+1}}$:", ["$4 \\cdot 3^{n-1}$", "$2$", "$3^{n}$", "$6^{2n-1}$"], 0, "$6^{n+1} = 2^{n+1}3^{n+1}$, so it $= 2^{2} \\cdot 3^{n-1} = 4 \\cdot 3^{n-1}$."));
  q.push(ms("hard", "If $x = 1.2 \\times 10^6$ and $y = 3 \\times 10^4$, which are equal to $x \\div y$?", ["$4 \\times 10^1$", "$40$", "$4 \\times 10^2$", "$0.4 \\times 10^2$"], [0, 1, 3], "$x \\div y = 40 = 4 \\times 10^1$."));
  q.push(mc("hard", "The volume of a cube with side $2.5 \\times 10^{-2}$ m, in scientific notation, is:", ["$1.5625 \\times 10^{-5}\\ \\text{m}^3$", "$1.56 \\times 10^{-4}\\ \\text{m}^3$", "$15.625 \\times 10^{-6}\\ \\text{m}^3$", "$1.6 \\times 10^{-5}\\ \\text{m}^3$"], 0, "$(2.5)^3 = 15.625$, so $V = 15.625 \\times 10^{-6} = 1.5625 \\times 10^{-5}\\ \\text{m}^3$."));
  q.push(mc("hard", "$(9 \\times 10^8) \\div (3 \\times 10^{-4})$ equals:", ["$3 \\times 10^{12}$", "$3 \\times 10^4$", "$3 \\times 10^{-12}$", "$27 \\times 10^{12}$"], 0));
  q.push(mc("hard", "If $3^x = 81$ and $y^2 = 36$, then $x \\times y$ is:", ["$24$", "$-24$", "Both $24$ and $-24$", "$36$"], 2, "$x = 4$ and $y = \\pm 6$, so $x \\times y = \\pm 24$."));
  q.push(ms("hard", "Which are irrational? (Powers/roots)", ["$\\sqrt{0.25}$", "$\\sqrt{8}$", "$\\pi^2$", "$\\frac{\\sqrt{12}}{\\sqrt{3}}$"], [1, 2], "$\\sqrt{0.25}=0.5$ and $\\frac{\\sqrt{12}}{\\sqrt{3}}=2$ are rational."));
  q.push(ms("hard", "Simplify $\\frac{5^{2n+1} \\cdot 25^{n-1}}{125^{n}}$. Which is the result?", ["$5^{n-1}$", "$5^{n+1}$", "$5^{3n}$", "$5$"], [0], "$25^{n-1}=5^{2n-2}$, $125^n=5^{3n}$; $5^{(2n+1)+(2n-2)-3n} = 5^{n-1}$."));
  q.push(ms("hard", "When you multiply or divide numbers in scientific notation, you operate on the coefficients and add/subtract the exponents. For which operations does this direct rule apply?", ["Multiplication", "Division", "Addition", "Subtraction"], [0, 1]));
  q.push(ms("hard", "Which statements are true?", ["$2^5 = 5^2$", "$3^4 > 4^3$", "$10^{100}$ is a googol", "$2^{10} > 10^3$"], [1, 2, 3]));
  q.push(ms("hard", "If $a = 2 \\times 10^3$ and $b = 5 \\times 10^{-2}$, which are equal to $a \\times b$?", ["$1 \\times 10^2$", "$100$", "$1.0 \\times 10^2$", "$10 \\times 10^1$"], [0, 1, 2, 3]));
  q.push(tf("hard", "$(2x^3y^{-2})^{-3} = \\frac{y^6}{8x^9}$.", true));
  q.push(tf("hard", "$3.6 \\times 10^{-5}$ is larger than $3.5 \\times 10^{-4}$.", false));
  q.push(tf("hard", "$\\frac{3 \\times 10^5}{6 \\times 10^{-2}} = 5 \\times 10^6$.", true));
  q.push(tf("hard", "$(a+b)^n = a^n + b^n$ for all positive integers $n$.", false));
  q.push(tf("hard", "A number in scientific notation can have a coefficient of exactly $10$.", false, "The coefficient $a$ must satisfy $1 \\le a < 10$."));
  q.push(fill("hard", "In $\\frac{2^{50} \\times 4^{25}}{8^{20}} = 2^{\\,?}$, the missing exponent is ___.", ["40"]));
  q.push(num("hard", "One year $\\approx 3.15 \\times 10^7$ s. How many seconds are in $1.5 \\times 10^9$ years? (you may type 4.725e16)", 4.725e16, 1e12));
  q.push(num("hard", "In $\\left(\\frac{2a^3b^2}{a^{-1}b^3}\\right)^2 = 4a^{\\,?}b^{-2}$, what is the exponent of $a$?", 8, 0, "Inside $= 2a^4b^{-1}$; squared $= 4a^8b^{-2}$."));
  q.push(num("hard", "$(1.25 \\times 10^{-3}) \\times (8 \\times 10^5) = ?$ (you may type 1e3)", 1e3, 0));
  q.push(num("hard", "$\\frac{9 \\times 10^{-6}}{3 \\times 10^{-9}} = ?$ (you may type 3e3)", 3e3, 0));

  return q;
}

// ── 1.4 Exponent Laws ────────────────────────────────────────
export function gen14() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "$3^2 \\times 3^4$ simplifies to:", ["$3^6$", "$3^8$", "$9^6$", "$3^2$"], 0));
  q.push(mc("easy", "$\\frac{5^7}{5^3}$ equals:", ["$5^4$", "$5^{10}$", "$5^{21}$", "$5^{2.33}$"], 0));
  q.push(mc("easy", "$(2^3)^4$ simplifies to:", ["$2^7$", "$2^{12}$", "$2^{64}$", "$2^1$"], 1));
  q.push(mc("easy", "$(-3)^2$ equals:", ["$-9$", "$9$", "$-6$", "$6$"], 1));
  q.push(mc("easy", "$4^0$ equals:", ["$0$", "$1$", "$4$", "undefined"], 1));
  // multiple select
  q.push(ms("easy", "Which equal $2^{10}$?", ["$2^5 \\times 2^5$", "$4^5$", "$2^{20} \\div 2^{10}$", "$(2^5)^2$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are true?", ["$3^4 \\times 3^2 = 3^6$", "$3^4 \\times 2^4 = 6^4$", "$a^3 \\times b^3 = (ab)^3$", "$2^3 \\times 2^4 = 2^{12}$"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $\\frac{1}{9}$?", ["$3^{-2}$", "$9^{-1}$", "$\\frac{1}{3^2}$", "$(-3)^{-2}$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which simplify to $x^6$?", ["$x^2 \\times x^3$", "$(x^2)^3$", "$\\frac{x^9}{x^3}$", "$x^4 \\times x^2$"], [1, 2, 3]));
  q.push(ms("easy", "Which statements are correct?", ["$a^m \\times a^n = a^{m+n}$", "$(a^m)^n = a^{mn}$", "$a^m \\div a^n = a^{m-n}$ for $a \\neq 0$", "$a^0 = 0$"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "$2^3 \\times 2^4 = 2^7$.", true));
  q.push(tf("easy", "$10^5 \\div 10^2 = 10^3$.", true));
  q.push(tf("easy", "$(4^2)^3 = 4^5$.", false, "It equals $4^6$."));
  q.push(tf("easy", "$5^0 = 0$.", false, "$5^0 = 1$."));
  q.push(tf("easy", "$(-2)^3 = -8$.", true));
  // fill in the blank
  q.push(fill("easy", "In $6^3 \\times 6^5 = 6^{\\,?}$, the missing exponent is ___.", ["8"]));
  q.push(fill("easy", "In $\\frac{7^9}{7^4} = 7^{\\,?}$, the missing exponent is ___.", ["5"]));
  q.push(fill("easy", "In $(10^2)^3 = 10^{\\,?}$, the missing exponent is ___.", ["6"]));
  q.push(fill("easy", "In $a^4 \\times a^{-2} = a^{\\,?}$ (for $a \\neq 0$), the missing exponent is ___.", ["2"]));
  q.push(fill("easy", "In $3^2 \\times 3^0 \\times 3^1 = 3^{\\,?}$, the missing exponent is ___.", ["3"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Simplify $\\frac{2^5 \\times 2^{-3}}{2^2}$:", ["$2^0$", "$2^1$", "$2^4$", "$2^{-4}$"], 0, "$2^{5-3-2} = 2^0$."));
  q.push(mc("medium", "$(3x^2y)^3$ simplifies to:", ["$27x^6y^3$", "$9x^5y^3$", "$27x^5y^3$", "$9x^6y^3$"], 0));
  q.push(mc("medium", "$\\left(\\frac{2a^3}{b^2}\\right)^4$ equals:", ["$\\frac{16a^{12}}{b^8}$", "$\\frac{8a^7}{b^6}$", "$\\frac{16a^7}{b^6}$", "$\\frac{8a^{12}}{b^8}$"], 0));
  q.push(mc("medium", "If $2^x = 32$, then $x =$", ["$4$", "$5$", "$6$", "$16$"], 1));
  q.push(mc("medium", "Simplify $\\frac{4^5}{8^3}$:", ["$2^1$", "$2^4$", "$2^{-1}$", "$1$"], 0, "$4^5 = 2^{10}$, $8^3 = 2^9$, quotient $= 2^1$."));
  q.push(ms("medium", "Which equal $81$?", ["$3^4$", "$9^2$", "$(-3)^4$", "$81^1$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are equivalent to $x^{-3}$?", ["$\\frac{1}{x^3}$", "$\\frac{x^2}{x^5}$", "$x^3$", "$(-x)^3$"], [0, 1]));
  q.push(mc("medium", "Simplify $\\left(\\frac{2x^2}{y}\\right)^3 \\times \\left(\\frac{y^2}{4x}\\right)^2$:", ["$\\frac{x^4 y}{8}$", "$\\frac{x^4 y}{2}$", "$\\frac{x^4 y}{4}$", "$\\frac{x^2 y}{2}$"], 1, "$8x^6y^{-3} \\times \\frac{y^4}{16x^2} = \\frac{x^4 y}{2}$."));
  q.push(ms("medium", "Which simplify to $a^{10}$?", ["$(a^2)^5$", "$a^3 \\times a^7$", "$\\frac{a^{20}}{a^{10}}$", "$(a^5)^2$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which statements are true?", ["$(ab)^n = a^n b^n$", "$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$ for $b \\neq 0$", "$a^{-n} = \\frac{1}{a^n}$", "$a^{m+n} = a^m + a^n$"], [0, 1, 2]));
  q.push(tf("medium", "$(2^3)^2 = 2^5$.", false, "It equals $2^6$."));
  q.push(tf("medium", "$\\frac{3^8}{3^5} = 3^3$.", true));
  q.push(tf("medium", "$x^2 \\times x^3 = x^5$ for any $x$.", true));
  q.push(tf("medium", "$(-2x^2y^3)^4 = 16x^8 y^{12}$.", true));
  q.push(tf("medium", "$2^{10} \\div 4^3 = 2^4$.", true, "$4^3 = 2^6$, quotient $= 2^4$."));
  q.push(fill("medium", "In $\\frac{3^5 \\times 3^2}{3^4} = 3^{\\,?}$, the missing exponent is ___.", ["3"]));
  q.push(num("medium", "In $(2x^3y^2)^4 = 16x^{?}y^{8}$, the exponent of $x$ is ___.", 12, 0, "$(2x^3y^2)^4 = 16x^{12}y^8$."));
  q.push(num("medium", "Simplify $\\left(\\frac{5a^2}{b}\\right)^3 \\times \\left(\\frac{b^2}{25a}\\right)^2 = \\frac{a^{?} b}{5}$. The exponent of $a$ is ___.", 4, 0, "$= \\frac{a^4 b}{5}$."));
  q.push(num("medium", "If $3^x = 27$ and $2^y = 32$, then $x + y =$ ___.", 8, 0, "$x = 3$, $y = 5$."));
  q.push(fill("medium", "In $\\frac{2^{n+2} \\times 2^{n-1}}{2^{2n}} = 2^{\\,?}$, the missing exponent is ___.", ["1"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Simplify $\\frac{2^{3n+1} \\times 4^{n-1}}{8^{n+2}}$:", ["$2^{2n-7}$", "$2^{-5}$", "$2^{n-5}$", "$2^{2n+7}$"], 0, "$4^{n-1}=2^{2n-2}$, $8^{n+2}=2^{3n+6}$; $2^{(3n+1)+(2n-2)-(3n+6)} = 2^{2n-7}$."));
  q.push(mc("hard", "$\\left(\\frac{3x^{-2}y^3}{x^4y^{-2}}\\right)^{-2}$ simplifies to:", ["$\\frac{x^{12}}{9y^{10}}$", "$\\frac{x^{12}}{81y^{10}}$", "$\\frac{9y^{10}}{x^{12}}$", "$\\frac{81y^{10}}{x^{12}}$"], 0, "Inside $= 3x^{-6}y^5$; raised to $-2$: $3^{-2}x^{12}y^{-10} = \\frac{x^{12}}{9y^{10}}$."));
  q.push(mc("hard", "If $a = 2^{10}$, $b = 4^5$, $c = 8^3$, order them from smallest to largest:", ["$a, b, c$", "$c, a, b$", "$c, b, a$", "$b, c, a$"], 1, "$a = b = 1024$, $c = 512$, so $c$ is smallest."));
  q.push(mc("hard", "$\\left(\\frac{x^2 y^{-1}}{x^{-3} y^2}\\right)^3$ simplifies to:", ["$\\frac{x^{15}}{y^9}$", "$\\frac{x^6}{y^3}$", "$x^{15} y^9$", "$\\frac{y^9}{x^{15}}$"], 0, "Inside $= x^5 y^{-3}$; cubed $= x^{15} y^{-9}$."));
  q.push(mc("hard", "$(2.5 \\times 10^{15}) \\times (4 \\times 10^{-9})$ in scientific notation is:", ["$1.0 \\times 10^7$", "$1.0 \\times 10^8$", "$1.0 \\times 10^6$", "$10 \\times 10^6$"], 0, "$10 \\times 10^6 = 1.0 \\times 10^7$."));
  q.push(ms("hard", "Which are true for all nonzero $a, b$?", ["$a^m a^n = a^{m+n}$", "$a^m \\div a^n = a^{m-n}$", "$(a^m)^n = a^{mn}$", "$(a+b)^n = a^n + b^n$"], [0, 1, 2]));
  q.push(mc("hard", "Solve for $n$: $2^{n+1} \\times 4^{n-2} = 8$.", ["$n=2$", "$n=3$", "$n=1$", "no solution"], 0, "$2^{(n+1)+(2n-4)} = 2^{3n-3} = 2^3 \\Rightarrow 3n-3 = 3 \\Rightarrow n = 2$."));
  q.push(ms("hard", "Which are equivalent to $\\sqrt[3]{x^2}$ in exponent form?", ["$x^{2/3}$", "$(x^{1/3})^2$", "$(x^2)^{1/3}$", "$x^{3/2}$"], [0, 1, 2]));
  q.push(mc("hard", "If $2^x = 5$ and $4^y = 25$, then:", ["$x = y$", "$y = 2x$", "$x = 2y$", "$x + y = 0$"], 0, "$4^y = 2^{2y} = 25 = 5^2 = 2^{2x}$, so $y = x$."));
  q.push(ms("hard", "Which simplify to $1$?", ["$\\frac{2^{10} \\times 4^5}{8^5}$", "$\\frac{3^5 \\times 27^2}{9^6}$", "$\\frac{5^0}{5^0}$", "$(-2)^2 \\times (-2)^{-2}$"], [2, 3], "A $= 2^5$ and B $= 3^{-1}$, not $1$."));
  q.push(tf("hard", "$x^a \\times y^a = (xy)^a$.", true));
  q.push(tf("hard", "$(x^{-2})^{-3} = x^6$ for $x \\neq 0$.", true));
  q.push(tf("hard", "$\\frac{2^{2n+1} \\times 4^{n}}{8^{n+1}} = 1$ for all $n$.", false, "It equals $2^{n-2}$, which is $1$ only when $n = 2$."));
  q.push(tf("hard", "If $a^m = a^n$ and $a > 0$, $a \\neq 1$, then $m = n$.", true));
  q.push(tf("hard", "$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.", true));
  q.push(num("hard", "If $3^x = 9^y$ and $x + y = 12$, then $x =$ ___.", 8, 0, "$x = 2y$, so $3y = 12 \\Rightarrow y = 4$, $x = 8$."));
  q.push(fill("hard", "Simplify $\\frac{2^{3x} \\cdot 4^{x+1}}{8^{x-1}} = 2^{\\,?}$. The exponent (in terms of $x$) is ___.", ["2x+5", "2x + 5", "5+2x"]));
  q.push(num("hard", "$\\frac{2^{10} + 2^{10}}{2^9}$ simplifies to ___.", 4, 0, "$\\frac{2 \\cdot 2^{10}}{2^9} = 2^2 = 4$."));
  q.push(num("hard", "If $2^x = 3$ and $3^y = 4$, then $2^{xy} =$ ___.", 4, 0, "$2^{xy} = (2^x)^y = 3^y = 4$."));
  q.push(num("hard", "In $\\left(\\frac{x^{2a} y^{b-1}}{x^{a-1} y^{b+1}}\\right)^3 = x^{3a+3} y^{?}$, the exponent of $y$ is ___.", -6, 0, "Inside $= x^{a+1} y^{-2}$; cubed $= x^{3a+3} y^{-6}$."));

  return q;
}

// ── 1.5 Integers in Context ──────────────────────────────────
// Money is written with \textdollar (not $) so it never collides with the
// $...$ math delimiters the question renderer splits on.
export function gen15() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The temperature is $-5^\\circ C$. It rises by $8^\\circ C$. The new temperature is:", ["$-13^\\circ C$", "$3^\\circ C$", "$13^\\circ C$", "$-3^\\circ C$"], 1));
  q.push(mc("easy", "A diver is at $-25$ m (below sea level). He ascends $10$ m. His new position is:", ["$-35$ m", "$-15$ m", "$15$ m", "$35$ m"], 1));
  q.push(mc("easy", "A bank account has $-\\textdollar 120$ (overdrawn). You deposit $\\textdollar 200$. The new balance is:", ["$-\\textdollar 320$", "$-\\textdollar 80$", "$\\textdollar 80$", "$\\textdollar 320$"], 2));
  q.push(mc("easy", "The lowest temperature was $-12^\\circ C$ and the highest was $-4^\\circ C$. The temperature change is:", ["$8^\\circ C$", "$-8^\\circ C$", "$16^\\circ C$", "$-16^\\circ C$"], 0));
  q.push(mc("easy", "A submarine at $-200$ m dives another $50$ m. Its depth is now:", ["$-250$ m", "$-150$ m", "$150$ m", "$250$ m"], 0));
  // multiple select
  q.push(ms("easy", "Which situations represent a negative integer?", ["10 m above sea level", "A loss of $\\textdollar 15$", "3 steps forward", "Temperature $4^\\circ C$ below zero"], [1, 3]));
  q.push(ms("easy", "The temperature changes from $-3^\\circ C$ to $5^\\circ C$. The increase is:", ["$-8$", "$8$", "$2$", "$5 - (-3)$"], [1, 3]));
  q.push(ms("easy", "Which operations correctly find the final depth if starting at $-30$ m and rising $12$ m?", ["$-30 + 12$", "$12 - 30$", "$-30 - 12$", "$12 + (-30)$"], [0, 1, 3]));
  q.push(ms("easy", "Which statements about integers in context are true?", ["Sea level is $0$", "A debt can be represented by a negative integer", "A profit of $\\textdollar 50$ is $+50$", "Temperature cannot be negative"], [0, 1, 2]));
  q.push(ms("easy", "Which represent the balance after starting with $-\\textdollar 50$ and then withdrawing $\\textdollar 30$?", ["$-\\textdollar 80$", "$-50 - 30$", "$-20$", "$-\\textdollar 20$"], [0, 1]));
  // true / false
  q.push(tf("easy", "A gain of 7 kg is represented by $-7$.", false));
  q.push(tf("easy", "If you are at $-4$ and move $+6$, you end at $+2$.", true));
  q.push(tf("easy", "The opposite of a loss of $\\textdollar 25$ is a gain of $\\textdollar 25$.", true));
  q.push(tf("easy", "$-10$ m means 10 m above sea level.", false));
  q.push(tf("easy", "A temperature drop from $2^\\circ C$ to $-3^\\circ C$ is a change of $-5^\\circ C$.", true));
  // fill in the blank (numeric for reliable grading)
  q.push(num("easy", "The integer for 8°C below zero is ___.", -8, 0));
  q.push(num("easy", "Starting at $-15$ and adding $+20$ gives ___.", 5, 0));
  q.push(num("easy", "A debt of $\\textdollar 200$ is written as ___.", -200, 0));
  q.push(num("easy", "Sea level is represented by the integer ___.", 0, 0));
  q.push(num("easy", "The change from $-7$ to $-1$ is an increase of ___.", 6, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "At 6:00 AM the temperature was $-8^\\circ C$. It rose $3^\\circ C$ per hour for 4 hours. At 10:00 AM it is:", ["$-20^\\circ C$", "$4^\\circ C$", "$-4^\\circ C$", "$12^\\circ C$"], 1, "$-8 + (3 \\times 4) = 4$."));
  q.push(mc("medium", "A stock started at $+\\textdollar 50$, fell $\\textdollar 70$, then rose $\\textdollar 30$. The final value is:", ["$-\\textdollar 10$", "$+\\textdollar 10$", "$-\\textdollar 90$", "$+\\textdollar 90$"], 1, "$50 - 70 + 30 = 10$."));
  q.push(mc("medium", "A city is at elevation $120$ m. Another city is $350$ m lower. Its elevation is:", ["$470$ m", "$-230$ m", "$230$ m", "$-470$ m"], 1, "$120 - 350 = -230$."));
  q.push(mc("medium", "A hiker starts at $-50$ m, climbs $120$ m, then descends $80$ m. Final altitude:", ["$-10$ m", "$10$ m", "$-90$ m", "$90$ m"], 0, "$-50 + 120 - 80 = -10$."));
  q.push(mc("medium", "The difference between a profit of $\\textdollar 400$ and a loss of $\\textdollar 250$ is:", ["$\\textdollar 150$", "$\\textdollar 650$", "$-\\textdollar 150$", "$-\\textdollar 650$"], 1, "$400 - (-250) = 650$."));
  q.push(ms("medium", "Which represent a net change of $+5$?", ["Start at $-2$, end at $3$", "Start at $10$, end at $15$", "Start at $-5$, end at $0$", "Start at $-10$, end at $-5$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A submarine goes from $-120$ m to $-90$ m. Which calculations are correct?", ["$-90 - (-120) = 30$ m rise", "$-120 + 30 = -90$", "$-90 + 120 = 30$", "$120 - 90 = 30$"], [0, 1, 2]));
  q.push(ms("medium", "Which scenarios result in a final value of $0$?", ["Start at $-15$, add $+15$", "Start at $+20$, subtract $-20$", "Start at $-8$, subtract $-8$", "Start at $0$, add $0$"], [0, 2, 3]));
  q.push(ms("medium", "A business has daily profits $-10, +20, -5, +15$. The total profit is:", ["$+20$", "$-10+20-5+15$", "$20$", "$10$"], [0, 1, 2]));
  q.push(ms("medium", "A diver descends 15 m, ascends 8 m, descends 12 m. Which expressions give the final depth if starting at $-5$ m?", ["$-5 - 15 + 8 - 12$", "$-5 + (-15) + 8 + (-12)$", "$-5 - 15 - 12 + 8$", "$-5 + 8 - 27$"], [0, 1, 2, 3]));
  q.push(tf("medium", "If you owe $\\textdollar 30$ and pay $\\textdollar 20$, your balance is $-\\textdollar 10$.", true));
  q.push(tf("medium", "A temperature change from $-5^\\circ C$ to $2^\\circ C$ is an increase of $-7^\\circ C$.", false));
  q.push(tf("medium", "Starting at $-3$ and moving $+8$ steps ends at $+5$.", true));
  q.push(tf("medium", "A loss of $\\textdollar 50$ followed by a gain of $\\textdollar 30$ is a net loss of $\\textdollar 20$.", true));
  q.push(tf("medium", "The elevation difference between $-20$ m and $15$ m is $35$ m.", true, "$15 - (-20) = 35$."));
  q.push(num("medium", "A plane at $1500$ m descends $2300$ m. Its new altitude (m) is ___.", -800, 0));
  q.push(num("medium", "From $-6^\\circ C$ to $9^\\circ C$, the temperature rose ___ degrees.", 15, 0));
  q.push(num("medium", "A team gains 8 yards, loses 12 yards, gains 5 yards. Net change (yards) = ___.", 1, 0));
  q.push(num("medium", "A checking account: start $+\\textdollar 200$, withdraw $\\textdollar 350$, deposit $\\textdollar 100$. Balance = ___.", -50, 0));
  q.push(num("medium", "The opposite of a 15 m decrease is a ___ m increase.", 15, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A climber starts at $-120$ m, climbs $+400$ m, descends $-350$ m, then ascends $+200$ m. Summit altitude:", ["$130$ m", "$370$ m", "$270$ m", "$70$ m"], 0, "$-120 + 400 - 350 + 200 = 130$."));
  q.push(mc("hard", "On Monday a stock is at $-15$. Tuesday it rises $+20$. Wednesday it falls by $x$ to end at $-5$. Find $x$:", ["$10$", "$0$", "$30$", "$20$"], 0, "$-15 + 20 = 5$; $5 - x = -5 \\Rightarrow x = 10$."));
  q.push(mc("hard", "A sub starts at $-2500$ m, descends $1500$ m, ascends $2000$ m, descends $1000$ m. Final depth:", ["$-3000$ m", "$-2000$ m", "$-1000$ m", "$0$ m"], 0, "$-2500 - 1500 + 2000 - 1000 = -3000$."));
  q.push(mc("hard", "Quarterly profits: Q1 $-200$, Q2 $+350$, Q3 $-450$, Q4 $+x$. If the year total is $-100$, find $x$:", ["$200$", "$-200$", "$100$", "$-100$"], 0, "$-300 + x = -100 \\Rightarrow x = 200$."));
  q.push(mc("hard", "A balloon at $500$ m rises $250$, descends $400$, rises $100$, descends $200$. To end at $0$ m, the final change must be:", ["$-250$ m", "$-150$ m", "$+150$ m", "Already at $0$ m"], 0, "It is at $250$ m, so it must descend $250$ m: a change of $-250$ m."));
  q.push(ms("hard", "The sum of a gain of $g$ and a loss of $l$ equals $-5$ (with $g, l \\ge 0$). Which pairs $(g,l)$ are possible?", ["$g=10, l=15$", "$g=-5, l=0$", "$g=0, l=5$", "$g=5, l=10$"], [0, 2, 3], "$g - l = -5$ with non-negative $g, l$: $(10,15), (0,5), (5,10)$. $g=-5$ is not a valid gain."));
  q.push(ms("hard", "An elevator at floor $F$ goes up 12, down 7, up 3, down 10, ending at floor $-2$. Which are true?", ["$F = 0$", "$F = 2$", "Net change is $-2$ from start", "$F = -2$"], [0, 2], "$F + 12 - 7 + 3 - 10 = F - 2 = -2 \\Rightarrow F = 0$."));
  q.push(ms("hard", "A swimmer goes from $+2$ m to $-8$ m. Which describe the change?", ["$-10$ m", "A dive of $|-10|$ m", "$+10$ m ascent if reversed", "$-10$ m relative"], [0, 1, 2, 3]));
  q.push(ms("hard", "City A: $-4^\\circ C$, City B: $-9^\\circ C$, City C: $2^\\circ C$. Which statements are true?", ["A is warmer than B by $5^\\circ C$", "C is warmer than B by $11^\\circ C$", "B is colder than A by $5^\\circ C$", "A is warmer than C by $-6^\\circ C$"], [0, 1, 2]));
  q.push(ms("hard", "A hiker: $E_1=-100$, $E_2=E_1+x$, $E_3=E_2-150$, $E_4=E_3+80$, $E_5=E_4-30=0$. Which are true?", ["$x = 200$", "$E_2 = 100$", "Total climb $= x + 80$", "Total descent $= 150 + 30$"], [0, 1, 2, 3]));
  q.push(tf("hard", "The net change from $a$ to $b$ is $b - a$.", true));
  q.push(tf("hard", "If the final depth is $-50$ m and you ascended $30$ m, the starting depth was $-80$ m.", true));
  q.push(tf("hard", "A $\\textdollar 60$ debt followed by a $\\textdollar 100$ deposit results in $+\\textdollar 40$.", true));
  q.push(tf("hard", "The temperature change from $-8$ to $-3$ is greater than from $-3$ to $2$.", false, "Both are $+5^\\circ$, so they are equal."));
  q.push(tf("hard", "A 500 m descent followed by a 200 m ascent is the same as a 300 m descent.", true));
  q.push(num("hard", "Starting at $-7$, add $x$, subtract $10$, add $3$, end at $0$. Then $x =$ ___.", 14, 0));
  q.push(num("hard", "A scuba diver at $-15$ m descends $d$ m, ascends $8$ m, ends at $-27$ m. Then $d =$ ___.", 20, 0));
  q.push(num("hard", "Profit: Jan $-200$, Feb $+300$, Mar $-150$, Apr $+x$. If the average monthly profit is $25$, then $x =$ ___.", 150, 0));
  q.push(num("hard", "The opposite of a $-350$ m change is ___ m.", 350, 0));
  q.push(num("hard", "A debt of $-\\textdollar 500$ is reduced by $\\textdollar 200$. The debt becomes ___.", -300, 0));

  return q;
}

// ── 1.6 Fractions & Unit Fractions ───────────────────────────
export function gen16() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Which of the following is a unit fraction?", ["$\\frac{2}{3}$", "$\\frac{1}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{1}$"], 1));
  q.push(mc("easy", "$\\frac{3}{4} + \\frac{1}{4} =$", ["$\\frac{4}{8}$", "$1$", "$\\frac{4}{4}$", "Both $1$ and $\\frac{4}{4}$"], 3));
  q.push(mc("easy", "$\\frac{2}{3}$ of $12$ is:", ["$6$", "$8$", "$4$", "$9$"], 1));
  q.push(mc("easy", "Which fraction is greater than $\\frac{1}{2}$?", ["$\\frac{2}{5}$", "$\\frac{3}{8}$", "$\\frac{5}{9}$", "$\\frac{1}{3}$"], 2));
  q.push(mc("easy", "$\\frac{5}{8} - \\frac{1}{8} =$", ["$\\frac{4}{8}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "Both $\\frac{4}{8}$ and $\\frac{1}{2}$"], 3));
  // multiple select
  q.push(ms("easy", "Which are unit fractions?", ["$\\frac{1}{10}$", "$\\frac{2}{2}$", "$\\frac{1}{100}$", "$\\frac{3}{1}$"], [0, 2]));
  q.push(ms("easy", "Which equal $\\frac{3}{4}$?", ["$\\frac{6}{8}$", "$\\frac{9}{12}$", "$\\frac{12}{16}$", "$\\frac{15}{20}$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are true?", ["$\\frac{1}{2} > \\frac{1}{3}$", "$\\frac{2}{5} < \\frac{3}{5}$", "$\\frac{4}{7} = \\frac{8}{14}$", "$\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which fractions are between $0$ and $1$?", ["$\\frac{7}{6}$", "$\\frac{2}{3}$", "$\\frac{9}{10}$", "$\\frac{5}{4}$"], [1, 2]));
  q.push(ms("easy", "Which are equal to $\\frac{2}{3} \\times 6$?", ["$4$", "$\\frac{12}{3}$", "$6 \\times \\frac{2}{3}$", "$12 \\div 3$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("easy", "$\\frac{1}{4} + \\frac{1}{4} = \\frac{2}{8}$.", false, "It equals $\\frac{1}{2}$."));
  q.push(tf("easy", "$\\frac{3}{5}$ is a unit fraction.", false));
  q.push(tf("easy", "$\\frac{2}{3}$ of 9 is 6.", true));
  q.push(tf("easy", "$\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$.", false, "It equals $\\frac{5}{6}$."));
  q.push(tf("easy", "Every unit fraction is less than 1.", true));
  // fill in the blank
  q.push(num("easy", "In $\\frac{3}{8} + \\frac{2}{8} = \\frac{?}{8}$, the missing numerator is ___.", 5, 0));
  q.push(fill("easy", "The unit fraction with denominator 7 is ___.", ["1/7", "\\frac{1}{7}"]));
  q.push(num("easy", "$\\frac{2}{5}$ of 20 = ___.", 8, 0));
  q.push(fill("easy", "$\\frac{5}{6} - \\frac{1}{6}$ simplifies to ___.", ["2/3", "\\frac{2}{3}"]));
  q.push(num("easy", "$\\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} = $ ___.", 1, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "$\\frac{2}{5} + \\frac{3}{10} =$", ["$\\frac{5}{15}$", "$\\frac{7}{10}$", "$\\frac{1}{2}$", "$\\frac{5}{10}$"], 1, "$\\frac{4}{10} + \\frac{3}{10} = \\frac{7}{10}$."));
  q.push(mc("medium", "Which fraction is closest to $1$?", ["$\\frac{7}{8}$", "$\\frac{5}{6}$", "$\\frac{9}{10}$", "$\\frac{99}{100}$"], 3));
  q.push(mc("medium", "A recipe needs $\\frac{2}{3}$ cup of sugar. You make $\\frac{3}{4}$ of the recipe. Sugar needed:", ["$\\frac{5}{7}$ cup", "$\\frac{1}{2}$ cup", "$\\frac{2}{3}$ cup", "$\\frac{3}{4}$ cup"], 1, "$\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$."));
  q.push(ms("medium", "Which sums equal a whole number?", ["$\\frac{1}{2} + \\frac{1}{3}$", "$\\frac{1}{4} + \\frac{3}{4}$", "$\\frac{2}{5} + \\frac{3}{7}$", "$\\frac{5}{6} + \\frac{1}{6}$"], [1, 3]));
  q.push(mc("medium", "$\\frac{3}{4} \\div \\frac{1}{2} =$", ["$\\frac{3}{8}$", "$\\frac{6}{4}$", "$1.5$", "Both $\\frac{6}{4}$ and $1.5$"], 3, "$\\frac{3}{4} \\times 2 = \\frac{6}{4} = 1.5$."));
  q.push(ms("medium", "Which expressions equal $\\frac{5}{6}$?", ["$\\frac{1}{2} + \\frac{1}{3}$", "$\\frac{2}{3} + \\frac{1}{6}$", "$1 - \\frac{1}{6}$", "$\\frac{10}{12}$"], [0, 1, 2, 3]));
  q.push(ms("medium", "If $\\frac{a}{b}$ is a unit fraction, then:", ["$a = 1$", "$b > a$", "$b = 1$", "$b > 0$"], [0, 1, 3]));
  q.push(ms("medium", "Which are true?", ["$\\frac{2}{3} > \\frac{3}{5}$", "$\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$", "$\\frac{3}{8} < 0.4$", "$\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$"], [0, 1, 2, 3]));
  q.push(ms("medium", "In an Egyptian-fraction sense (distinct unit fractions), $\\frac{3}{4}$ can be written as:", ["$\\frac{1}{2} + \\frac{1}{4}$", "$\\frac{1}{3} + \\frac{1}{2}$", "$\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4}$", "$\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}$"], [0]));
  q.push(ms("medium", "A pizza is cut into 8 slices. You eat 3. Which represent the fraction eaten?", ["$\\frac{3}{8}$", "$0.375$", "$37.5\\%$", "$\\frac{5}{8}$"], [0, 1, 2]));
  q.push(tf("medium", "$\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$.", true));
  q.push(tf("medium", "$\\frac{3}{4} > \\frac{4}{5}$.", false));
  q.push(tf("medium", "The product of two unit fractions is a unit fraction.", true, "$\\frac{1}{a} \\times \\frac{1}{b} = \\frac{1}{ab}$."));
  q.push(tf("medium", "$\\frac{1}{2} \\div \\frac{1}{4} = 2$.", true));
  q.push(tf("medium", "$\\frac{2}{3}$ of $\\frac{3}{4}$ equals $\\frac{1}{2}$.", true));
  q.push(fill("medium", "$\\frac{2}{5} + \\frac{3}{4} = $ ___ (single fraction).", ["23/20", "\\frac{23}{20}"]));
  q.push(fill("medium", "$\\frac{5}{8} \\times \\frac{4}{5} = $ ___ (simplest form).", ["1/2", "\\frac{1}{2}"]));
  q.push(fill("medium", "$\\frac{1}{9} + \\frac{1}{9} + \\frac{1}{9} = $ ___ (simplest form).", ["1/3", "\\frac{1}{3}"]));
  q.push(fill("medium", "$\\frac{7}{10} - \\frac{2}{5} = $ ___ (simplest form).", ["3/10", "\\frac{3}{10}"]));
  q.push(num("medium", "If $\\frac{1}{a} + \\frac{1}{a} = \\frac{1}{2}$, then $a =$ ___.", 4, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Which Egyptian-fraction sum equals $\\frac{5}{6}$?", ["$\\frac{1}{2} + \\frac{1}{3}$", "$\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{12}$", "Both A and B", "$\\frac{1}{3} + \\frac{1}{3}$"], 2));
  q.push(mc("hard", "A tank is $\\frac{3}{5}$ full. After adding $20$ L it is $\\frac{4}{5}$ full. The capacity is:", ["$50$ L", "$100$ L", "$75$ L", "$80$ L"], 1, "$\\frac{1}{5}$ of the tank $= 20$ L, so full $= 100$ L."));
  q.push(mc("hard", "$\\frac{2}{3} \\div \\frac{3}{4} \\times \\frac{1}{2} =$", ["$\\frac{1}{4}$", "$\\frac{4}{9}$", "$\\frac{8}{9}$", "$\\frac{2}{3}$"], 1, "$\\frac{2}{3} \\times \\frac{4}{3} \\times \\frac{1}{2} = \\frac{8}{18} = \\frac{4}{9}$."));
  q.push(ms("hard", "Which are NOT unit fractions but CAN be written as a sum of two distinct unit fractions?", ["$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{5}{6}$"], [0, 2, 3], "$\\frac{2}{3}=\\frac{1}{2}+\\frac{1}{6}$, $\\frac{3}{4}=\\frac{1}{2}+\\frac{1}{4}$, $\\frac{5}{6}=\\frac{1}{2}+\\frac{1}{3}$. $\\frac{1}{2}$ is itself a unit fraction."));
  q.push(mc("hard", "A student reads $\\frac{2}{5}$ of a book, then $\\frac{1}{3}$ of the remainder, then has 40 pages left. Total pages:", ["$75$", "$100$", "$120$", "$90$"], 1, "Read $\\frac{2}{5} + \\frac{1}{3}\\cdot\\frac{3}{5} = \\frac{3}{5}$; remaining $\\frac{2}{5} = 40 \\Rightarrow$ total $100$."));
  q.push(ms("hard", "Which statements about $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}$ are true?", ["It equals $1$", "It is a sum of unit fractions", "It equals $\\frac{1}{2} + \\frac{1}{2}$", "It is greater than $\\frac{5}{6}$"], [0, 1, 2, 3]));
  q.push(ms("hard", "If $\\frac{1}{a} + \\frac{1}{b} = \\frac{3}{4}$ with positive integers $a, b$, which pairs work?", ["$a=2, b=4$", "$a=3, b=2$", "$a=4, b=4$", "$a=2, b=2$"], [0], "$\\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$."));
  q.push(ms("hard", "Which fractions are greater than $\\frac{2}{3}$?", ["$\\frac{5}{7}$", "$\\frac{7}{10}$", "$\\frac{3}{4}$", "$\\frac{11}{15}$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A rope is cut into 3 pieces: first $\\frac{2}{5}$ of the rope, second $\\frac{1}{4}$ of the rope, third $7$ m. Which give the rope length?", ["$14$ m", "$20$ m", "$28$ m", "$7 \\div (1 - \\frac{2}{5} - \\frac{1}{4})$"], [1, 3], "$1 - \\frac{2}{5} - \\frac{1}{4} = \\frac{7}{20}$, so length $= 7 \\div \\frac{7}{20} = 20$ m."));
  q.push(ms("hard", "Which are valid Egyptian-fraction representations of $\\frac{2}{5}$?", ["$\\frac{1}{3} + \\frac{1}{15}$", "$\\frac{1}{4} + \\frac{1}{20}$", "$\\frac{1}{3} + \\frac{1}{8}$", "$\\frac{1}{4} + \\frac{1}{10} + \\frac{1}{20}$"], [0, 3], "$\\frac{1}{3}+\\frac{1}{15}=\\frac{2}{5}$ and $\\frac{1}{4}+\\frac{1}{10}+\\frac{1}{20}=\\frac{2}{5}$. B$=\\frac{3}{10}$, C$=\\frac{11}{24}$."));
  q.push(tf("hard", "The sum of two different unit fractions is always a unit fraction.", false, "$\\frac{1}{2}+\\frac{1}{3}=\\frac{5}{6}$."));
  q.push(tf("hard", "$\\frac{1}{a} + \\frac{1}{a} = \\frac{2}{a}$ is never a unit fraction.", false, "If $a=2$, $\\frac{2}{2}=1=\\frac{1}{1}$."));
  q.push(tf("hard", "$\\frac{5}{8}$ can be written as $\\frac{1}{2} + \\frac{1}{8}$.", true));
  q.push(tf("hard", "$\\frac{2}{3}$ of $\\frac{3}{4}$ equals $\\frac{1}{2}$ exactly.", true));
  q.push(tf("hard", "Every fraction between 0 and 1 can be written as a sum of distinct unit fractions.", true, "This is the Egyptian-fraction theorem."));
  q.push(num("hard", "If $\\frac{1}{a} + \\frac{1}{b} = \\frac{5}{6}$ with $a < b$ positive integers, then $a =$ ___.", 2, 0, "$\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$, so $a=2$, $b=3$."));
  q.push(num("hard", "$\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{7} + \\frac{1}{?} = 1$. The missing denominator is ___.", 42, 0));
  q.push(fill("hard", "A recipe uses $\\frac{3}{8}$ cup of flour. For $1\\frac{1}{2}$ times the recipe, flour needed = ___ cups.", ["9/16", "\\frac{9}{16}"]));
  q.push(fill("hard", "$\\frac{3}{4} \\times \\frac{2}{5} \\div \\frac{1}{2} = $ ___ (simplest form).", ["3/5", "\\frac{3}{5}"]));
  q.push(num("hard", "If $\\frac{x}{y} + \\frac{y}{x} = \\frac{25}{12}$ with $x < y$ positive integers, then $x + y =$ ___.", 7, 0, "$x=3$, $y=4$: $\\frac{3}{4} + \\frac{4}{3} = \\frac{25}{12}$."));

  return q;
}

// ── 1.7 Operations with +/- Fractions ────────────────────────
export function gen17() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "$\\frac{1}{2} + \\left(-\\frac{1}{4}\\right) =$", ["$\\frac{1}{4}$", "$-\\frac{1}{4}$", "$\\frac{3}{4}$", "$-\\frac{3}{4}$"], 0));
  q.push(mc("easy", "$-\\frac{2}{3} \\times \\frac{3}{4} =$", ["$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$-\\frac{6}{12}$", "Both $-\\frac{1}{2}$ and $-\\frac{6}{12}$"], 3));
  q.push(mc("easy", "$\\frac{3}{5} \\div \\left(-\\frac{1}{2}\\right) =$", ["$-\\frac{3}{10}$", "$-\\frac{6}{5}$", "$\\frac{6}{5}$", "$\\frac{3}{10}$"], 1));
  q.push(mc("easy", "$-\\frac{3}{8} + \\frac{5}{8} =$", ["$-\\frac{2}{8}$", "$-\\frac{1}{4}$", "$\\frac{1}{4}$", "$-\\frac{4}{8}$"], 2, "$\\frac{5-3}{8} = \\frac{2}{8} = \\frac{1}{4}$ (positive)."));
  q.push(mc("easy", "$\\frac{2}{3} - \\left(-\\frac{1}{3}\\right) =$", ["$\\frac{1}{3}$", "$-\\frac{1}{3}$", "$1$", "$-1$"], 2));
  // multiple select
  q.push(ms("easy", "Which equal $-\\frac{1}{2}$?", ["$\\frac{1}{4} - \\frac{3}{4}$", "$-\\frac{2}{4}$", "$\\left(-\\frac{1}{3}\\right) \\times \\frac{3}{2}$", "$\\frac{1}{3} \\div \\left(-\\frac{2}{3}\\right)$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which expressions are positive?", ["$\\left(-\\frac{1}{2}\\right) \\times \\left(-\\frac{2}{3}\\right)$", "$\\left(-\\frac{3}{4}\\right) \\div \\left(-\\frac{1}{2}\\right)$", "$\\frac{1}{5} + \\left(-\\frac{2}{5}\\right)$", "$-\\frac{1}{3} - \\frac{1}{3}$"], [0, 1]));
  q.push(ms("easy", "Which equal $\\frac{1}{6}$?", ["$\\frac{1}{2} \\times \\frac{1}{3}$", "$-\\frac{1}{3} \\times \\left(-\\frac{1}{2}\\right)$", "$\\frac{1}{3} - \\frac{1}{2}$", "$\\frac{1}{2} + \\left(-\\frac{1}{3}\\right)$"], [0, 1, 3], "$\\frac{1}{3}-\\frac{1}{2}=-\\frac{1}{6}$ (negative); $\\frac{1}{2}-\\frac{1}{3}=\\frac{1}{6}$."));
  q.push(ms("easy", "Which equal $0$? (The value of $-\\frac{1}{4} + \\frac{3}{4} - \\frac{1}{2}$ is $0$.)", ["$0$", "$-\\frac{2}{4} + \\frac{3}{4}$", "$\\frac{1}{4} - \\frac{2}{4}$", "$-\\frac{1}{4} + \\frac{1}{4}$"], [0, 3], "B$=\\frac{1}{4}$ and C$=-\\frac{1}{4}$ are not $0$."));
  q.push(ms("easy", "Which are true?", ["Negative $\\times$ negative $=$ positive", "Positive $\\div$ negative $=$ negative", "Negative $+$ negative $=$ negative", "Negative $-$ negative $=$ negative always"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "$-\\frac{1}{2} + \\frac{1}{2} = 0$.", true));
  q.push(tf("easy", "$-\\frac{3}{5} \\times \\frac{5}{3} = -1$.", true));
  q.push(tf("easy", "$\\frac{2}{3} - \\frac{4}{3} = \\frac{2}{3}$.", false, "It equals $-\\frac{2}{3}$."));
  q.push(tf("easy", "$\\left(-\\frac{1}{4}\\right) \\div \\left(-\\frac{1}{2}\\right) = \\frac{1}{2}$.", true));
  q.push(tf("easy", "$-\\frac{2}{5} + \\left(-\\frac{1}{5}\\right) = -\\frac{3}{5}$.", true));
  // fill in the blank
  q.push(fill("easy", "$\\frac{1}{3} + \\left(-\\frac{2}{3}\\right) = $ ___.", ["-1/3", "-\\frac{1}{3}"]));
  q.push(fill("easy", "$-\\frac{3}{7} \\times \\frac{7}{9} = $ ___ (simplest form).", ["-1/3", "-\\frac{1}{3}"]));
  q.push(num("easy", "$\\frac{5}{6} \\div \\left(-\\frac{5}{12}\\right) = $ ___.", -2, 0));
  q.push(fill("easy", "$\\frac{1}{2} - \\left(-\\frac{1}{4}\\right) = $ ___.", ["3/4", "\\frac{3}{4}"]));
  q.push(fill("easy", "$-\\frac{1}{8} + \\frac{3}{8} - \\frac{1}{8} = $ ___ (simplest form).", ["1/8", "\\frac{1}{8}"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "$-\\frac{2}{5} - \\frac{1}{3} =$", ["$-\\frac{11}{15}$", "$-\\frac{1}{2}$", "$\\frac{11}{15}$", "$\\frac{1}{15}$"], 0, "$-\\frac{6}{15} - \\frac{5}{15} = -\\frac{11}{15}$."));
  q.push(mc("medium", "$\\left(-\\frac{3}{4}\\right) \\times \\frac{2}{5} \\times \\left(-\\frac{5}{6}\\right) =$", ["$-\\frac{1}{4}$", "$\\frac{1}{4}$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$"], 1, "neg $\\times$ pos $\\times$ neg $=$ pos $= \\frac{30}{120} = \\frac{1}{4}$."));
  q.push(mc("medium", "$\\frac{1}{2} \\div \\left(-\\frac{3}{4}\\right) \\times \\frac{1}{3} =$", ["$-\\frac{2}{9}$", "$-\\frac{1}{9}$", "$\\frac{2}{9}$", "$\\frac{1}{9}$"], 0, "$\\frac{1}{2} \\times -\\frac{4}{3} \\times \\frac{1}{3} = -\\frac{4}{18} = -\\frac{2}{9}$."));
  q.push(mc("medium", "A temperature starts at $-\\frac{3}{4}^\\circ C$, rises $\\frac{5}{8}^\\circ C$, then falls $\\frac{1}{2}^\\circ C$. Final temperature:", ["$-\\frac{5}{8}^\\circ C$", "$-\\frac{3}{4}^\\circ C$", "$-\\frac{1}{2}^\\circ C$", "$-\\frac{7}{8}^\\circ C$"], 0, "$-\\frac{6}{8} + \\frac{5}{8} - \\frac{4}{8} = -\\frac{5}{8}$."));
  q.push(mc("medium", "A car travels $\\frac{2}{3}$ km north, then $\\frac{1}{2}$ km south, then $\\frac{5}{6}$ km north. Net displacement:", ["$1$ km north", "$\\frac{1}{3}$ km north", "$\\frac{1}{2}$ km north", "$\\frac{5}{6}$ km north"], 0, "$\\frac{4}{6} - \\frac{3}{6} + \\frac{5}{6} = 1$."));
  // multiple select
  q.push(ms("medium", "Which equal $-\\frac{1}{2}$?", ["$\\frac{1}{3} - \\frac{5}{6}$", "$-\\frac{2}{3} + \\frac{1}{6}$", "$\\left(-\\frac{1}{4}\\right) \\times 2$", "$\\frac{5}{8} - \\frac{9}{8}$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which result in a positive number?", ["$-\\frac{1}{2} + \\frac{3}{4}$", "$-\\frac{1}{2} - \\frac{3}{4}$", "$\\frac{3}{4} \\times \\left(-\\frac{1}{2}\\right)$", "$\\left(-\\frac{3}{4}\\right) \\div \\left(-\\frac{1}{2}\\right)$"], [0, 3]));
  q.push(ms("medium", "Which equal $\\frac{1}{2} - \\frac{2}{3} + \\frac{1}{6}$?", ["$0$", "$\\frac{3 - 4 + 1}{6}$", "$\\frac{1}{3} - \\frac{2}{3}$", "$-\\frac{1}{6} + \\frac{1}{6}$"], [0, 1, 3], "The expression $= 0$; C $= -\\frac{1}{3}$."));
  q.push(ms("medium", "Which statements are true?", ["$-\\frac{2}{3} \\times \\frac{3}{4} = -\\frac{1}{2}$", "$-\\frac{2}{3} \\div \\frac{4}{3} = -\\frac{1}{2}$", "$\\frac{1}{2} \\div \\left(-\\frac{1}{4}\\right) = -2$", "$-\\frac{1}{2} \\times \\left(-\\frac{1}{2}\\right) = \\frac{1}{4}$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A stock changes $+\\frac{1}{4}, -\\frac{1}{2}, +\\frac{3}{8}, -\\frac{1}{8}$. Which represent the net change?", ["$-\\frac{1}{8}$", "$-\\frac{1}{4}$", "$\\frac{2}{8} - \\frac{4}{8} + \\frac{3}{8} - \\frac{1}{8}$", "$0$"], [2, 3], "$\\frac{2-4+3-1}{8} = 0$."));
  // true / false
  q.push(tf("medium", "$-\\frac{1}{2} + \\frac{1}{3} = -\\frac{1}{6}$.", true));
  q.push(tf("medium", "$\\frac{3}{4} - \\frac{5}{6} = -\\frac{1}{12}$.", true, "$\\frac{9-10}{12} = -\\frac{1}{12}$."));
  q.push(tf("medium", "$\\left(-\\frac{2}{5}\\right) \\div \\left(-\\frac{4}{5}\\right) = -\\frac{1}{2}$.", false, "It is positive $\\frac{1}{2}$."));
  q.push(tf("medium", "$\\left(-\\frac{1}{2}\\right)^2 = -\\frac{1}{4}$.", false, "It equals $+\\frac{1}{4}$."));
  q.push(tf("medium", "$\\frac{2}{3} \\times \\left(-\\frac{3}{8}\\right) \\times \\frac{4}{5} = -\\frac{1}{5}$.", true, "$\\frac{-24}{120} = -\\frac{1}{5}$."));
  // fill in the blank
  q.push(fill("medium", "$-\\frac{2}{3} + \\frac{1}{2} - \\frac{1}{6} = $ ___ (simplest form).", ["-1/3", "-\\frac{1}{3}"]));
  q.push(fill("medium", "$\\frac{3}{4} \\times \\left(-\\frac{2}{9}\\right) \\div \\frac{1}{3} = $ ___ (simplest form).", ["-1/2", "-\\frac{1}{2}"]));
  q.push(fill("medium", "$\\frac{1}{2} - \\left(-\\frac{2}{3}\\right) + \\left(-\\frac{5}{6}\\right) = $ ___ (simplest form).", ["1/3", "\\frac{1}{3}"]));
  q.push(fill("medium", "$\\left(-\\frac{1}{2}\\right)^3 \\times \\left(-\\frac{1}{2}\\right)^2 = $ ___.", ["-1/32", "-\\frac{1}{32}"]));
  q.push(fill("medium", "A debt of $\\frac{3}{4}$ dollar is reduced by $\\frac{1}{2}$ dollar. New debt = ___ dollar.", ["1/4", "\\frac{1}{4}"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "$\\dfrac{-\\frac{1}{2} + \\frac{2}{3}}{\\frac{1}{3} - \\frac{1}{4}} =$", ["$2$", "$-2$", "$\\frac{1}{2}$", "$-\\frac{1}{2}$"], 0, "Numerator $\\frac{1}{6}$, denominator $\\frac{1}{12}$; quotient $2$."));
  q.push(mc("hard", "Solve $x + \\frac{2}{3} = -\\frac{1}{4}$:", ["$-\\frac{11}{12}$", "$\\frac{11}{12}$", "$-\\frac{5}{12}$", "$\\frac{5}{12}$"], 0, "$x = -\\frac{3}{12} - \\frac{8}{12} = -\\frac{11}{12}$."));
  q.push(mc("hard", "$\\dfrac{\\frac{1}{2} - \\frac{3}{4}}{-\\frac{1}{2} + \\frac{1}{3}} \\times \\left(-\\frac{2}{5}\\right) =$", ["$-\\frac{3}{5}$", "$\\frac{3}{5}$", "$-\\frac{1}{5}$", "$\\frac{1}{5}$"], 0, "$\\frac{-1/4}{-1/6} = \\frac{3}{2}$; $\\frac{3}{2} \\times -\\frac{2}{5} = -\\frac{3}{5}$."));
  q.push(mc("hard", "A diver at $-\\frac{5}{6}$ m ascends $\\frac{1}{2}$ m, descends $\\frac{2}{3}$ m, then ascends $\\frac{1}{3}$ m. Final depth:", ["$-\\frac{2}{3}$ m", "$-\\frac{1}{2}$ m", "$-\\frac{1}{3}$ m", "$-\\frac{5}{6}$ m"], 0, "$-\\frac{10}{12} + \\frac{6}{12} - \\frac{8}{12} + \\frac{4}{12} = -\\frac{8}{12} = -\\frac{2}{3}$."));
  q.push(mc("hard", "$\\left(-\\frac{2}{3} + \\frac{3}{4}\\right) \\div \\left(-\\frac{1}{2} + \\frac{2}{3}\\right) =$", ["$\\frac{1}{2}$", "$1$", "$-1$", "$2$"], 0, "$\\frac{1/12}{1/6} = \\frac{1}{2}$."));
  // multiple select
  q.push(ms("hard", "Which equal $-\\frac{1}{3}$?", ["$\\frac{1}{2} - \\frac{5}{6}$", "$-\\frac{2}{3} + \\frac{1}{3}$", "$\\frac{1}{4} \\times \\left(-\\frac{4}{3}\\right)$", "$\\frac{1}{2} \\div \\left(-\\frac{3}{2}\\right)$"], [0, 1, 2, 3]));
  q.push(ms("hard", "If $a = -\\frac{1}{2}$, $b = \\frac{1}{3}$, $c = -\\frac{1}{4}$, which equal $ab + c$?", ["$-\\frac{1}{3}$", "$-\\frac{1}{6} - \\frac{1}{4}$", "$-\\frac{5}{12}$", "$-\\frac{11}{12}$"], [1, 2], "$ab = -\\frac{1}{6}$; $-\\frac{1}{6} - \\frac{1}{4} = -\\frac{5}{12}$."));
  q.push(ms("hard", "Which result in $-\\frac{3}{4}$?", ["$\\frac{1}{2} - \\frac{5}{4}$", "$-\\frac{1}{2} - \\frac{1}{4}$", "$\\frac{3}{8} \\times (-2)$", "$\\frac{1}{4} \\div \\left(-\\frac{1}{3}\\right)$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Solve $\\frac{x}{2} + \\frac{1}{3} = -\\frac{1}{6}$. Which are true?", ["$x = -1$", "$x = -\\frac{1}{2}$", "$\\frac{x}{2} = -\\frac{1}{2}$", "$x = 1$"], [0, 2], "$\\frac{x}{2} = -\\frac{1}{2} \\Rightarrow x = -1$."));
  q.push(ms("hard", "A recipe changes by $-\\frac{2}{3}$ cup, then $+\\frac{1}{2}$ cup, then $-\\frac{1}{6}$ cup. Which represent the net change?", ["$-\\frac{1}{3}$ cup", "$-\\frac{1}{3}$", "$-\\frac{4}{6} + \\frac{3}{6} - \\frac{1}{6}$", "$0$"], [0, 1, 2], "$-\\frac{4}{6} + \\frac{3}{6} - \\frac{1}{6} = -\\frac{2}{6} = -\\frac{1}{3}$."));
  // true / false
  q.push(tf("hard", "$\\left(-\\frac{1}{2}\\right) \\times \\left(-\\frac{2}{3}\\right) \\times \\left(-\\frac{3}{4}\\right) = -\\frac{1}{4}$.", true));
  q.push(tf("hard", "$\\dfrac{-\\frac{1}{2} + \\frac{1}{3}}{-\\frac{1}{4} + \\frac{1}{6}} = 2$.", true, "Numerator $-\\frac{1}{6}$, denominator $-\\frac{1}{12}$; quotient $2$."));
  q.push(tf("hard", "$\\frac{1}{2} - \\frac{3}{4} = \\frac{1}{4}$.", false, "It equals $-\\frac{1}{4}$."));
  q.push(tf("hard", "$-\\frac{2}{3} \\div \\frac{4}{5} = -\\frac{5}{6}$.", true, "$-\\frac{2}{3} \\times \\frac{5}{4} = -\\frac{10}{12} = -\\frac{5}{6}$."));
  q.push(tf("hard", "The product of three negative fractions is negative.", true));
  // fill in the blank
  q.push(fill("hard", "$\\dfrac{-\\frac{3}{4} + \\frac{1}{2}}{\\frac{1}{3} - \\frac{1}{2}} = $ ___.", ["3/2", "\\frac{3}{2}"]));
  q.push(fill("hard", "If $x + \\frac{2}{3} = -\\frac{1}{2}$, then $x = $ ___.", ["-7/6", "-\\frac{7}{6}"]));
  q.push(num("hard", "$\\left(-\\frac{2}{3} \\times \\frac{3}{4}\\right) \\div \\left(\\frac{1}{2} - \\frac{2}{3}\\right) = $ ___.", 3, 0, "$-\\frac{1}{2} \\div -\\frac{1}{6} = 3$."));
  q.push(fill("hard", "The distance between $-\\frac{1}{3}$ and $\\frac{1}{4}$ on the number line is ___.", ["7/12", "\\frac{7}{12}"]));
  q.push(num("hard", "$\\dfrac{\\frac{1}{2} - \\frac{3}{4}}{-\\frac{1}{2} + \\frac{1}{4}} = $ ___.", 1, 0, "$\\frac{-1/4}{-1/4} = 1$."));

  return q;
}

// ── 1.8 Ratios, Rates, %, Proportions ────────────────────────
export function gen18() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Simplify the ratio $8 : 12$.", ["$4 : 6$", "$2 : 3$", "$3 : 2$", "$8 : 12$"], 1));
  q.push(mc("easy", "$30\\%$ of $200$ is:", ["$30$", "$60$", "$600$", "$20$"], 1));
  q.push(mc("easy", "Solve for $x$: $\\frac{x}{4} = \\frac{3}{6}$.", ["$1$", "$2$", "$3$", "$4$"], 1));
  q.push(mc("easy", "A car travels $120$ km in $2$ hours. Its speed is:", ["$60$ km/h", "$240$ km/h", "$40$ km/h", "$120$ km/h"], 0));
  q.push(mc("easy", "If $a : b = 2 : 5$ and $b = 20$, then $a =$", ["$4$", "$8$", "$10$", "$50$"], 1));
  // multiple select
  q.push(ms("easy", "Which ratios are equivalent to $3 : 4$?", ["$6 : 8$", "$9 : 12$", "$12 : 16$", "$15 : 20$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which equal $50\\%$?", ["$\\frac{1}{2}$", "$0.5$", "$\\frac{50}{100}$", "$50$"], [0, 1, 2]));
  q.push(ms("easy", "A shirt costs $\\textdollar 40$ with a $10\\%$ discount. Which calculations give the sale price?", ["$40 - 4$", "$40 \\times 0.9$", "$40 \\times 0.1$", "$40 \\times \\frac{9}{10}$"], [0, 1, 3]));
  q.push(ms("easy", "Which are true proportions?", ["$\\frac{2}{3} = \\frac{4}{6}$", "$\\frac{5}{10} = \\frac{1}{2}$", "$\\frac{3}{4} = \\frac{9}{16}$", "$\\frac{1}{4} = \\frac{5}{20}$"], [0, 1, 3]));
  q.push(ms("easy", "$25\\%$ of a number is $15$. The number is:", ["$15 \\times 4$", "$15 \\div 0.25$", "$60$", "$45$"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "$40\\%$ of $50$ is $20$.", true));
  q.push(tf("easy", "The ratio $5 : 7$ is greater than $3 : 4$.", false, "$\\frac{5}{7} \\approx 0.714 < 0.75 = \\frac{3}{4}$."));
  q.push(tf("easy", "If $\\frac{x}{5} = \\frac{12}{15}$, then $x = 4$.", true));
  q.push(tf("easy", "A rate of $60$ km/h means $60$ km per $1$ hour.", true));
  q.push(tf("easy", "Increasing a quantity by $20\\%$ multiplies it by $1.2$.", true));
  // fill in the blank
  q.push(num("easy", "$10\\%$ of $250 =$ ___.", 25, 0));
  q.push(fill("easy", "Simplify $14 : 21 =$ ___ (write as p:q).", ["2:3", "2 : 3"]));
  q.push(num("easy", "If $\\frac{3}{4} = \\frac{x}{16}$, then $x =$ ___.", 12, 0));
  q.push(num("easy", "A bike travels $15$ km in $30$ minutes. Speed = ___ km/h.", 30, 0));
  q.push(fill("easy", "$75\\%$ as a fraction in simplest form = ___.", ["3/4", "\\frac{3}{4}"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Red and blue marbles are in ratio $3 : 5$. If there are 24 red, the total is:", ["$40$", "$64$", "$48$", "$56$"], 1, "1 part $= 8$, total $= 8 \\times 8 = 64$."));
  q.push(mc("medium", "A price increases from $\\textdollar 80$ to $\\textdollar 100$. The percentage increase is:", ["$20\\%$", "$25\\%$", "$80\\%$", "$125\\%$"], 1, "$\\frac{20}{80} = 25\\%$."));
  q.push(mc("medium", "If 15 workers build a wall in 8 days, how many days do 20 workers need?", ["$6$", "$10$", "$12$", "$4$"], 0, "$15 \\times 8 = 120$ worker-days; $120 \\div 20 = 6$."));
  q.push(mc("medium", "A map scale is $1 : 50000$. Two towns are $8$ cm apart on the map. The real distance is:", ["$4$ km", "$40$ km", "$0.4$ km", "$400$ km"], 0, "$8 \\times 50000 = 400000$ cm $= 4$ km."));
  q.push(mc("medium", "After a $30\\%$ discount a jacket costs $\\textdollar 56$. The original price was:", ["$\\textdollar 72.80$", "$\\textdollar 80$", "$\\textdollar 186.67$", "$\\textdollar 37.33$"], 1, "$56 \\div 0.7 = 80$."));
  // multiple select
  q.push(ms("medium", "Which are equal to $3 : 8$?", ["$6 : 16$", "$9 : 24$", "$12 : 32$", "$15 : 40$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which represent a $40\\%$ increase?", ["Multiply by $1.4$", "Multiply by $0.6$", "Add $40\\%$ of the original", "Divide by $0.6$"], [0, 2]));
  q.push(ms("medium", "If $x : 12 = 5 : 6$, then $x =$", ["$10$", "$\\frac{12 \\times 5}{6}$", "$15$", "$0.5$"], [0, 1]));
  q.push(ms("medium", "A car uses $5$ L of fuel for $60$ km. At the same rate, fuel for $150$ km is:", ["$12.5$ L", "$150 \\times \\frac{5}{60}$", "$15$ L", "$2$ L"], [0, 1]));
  q.push(ms("medium", "A profit rises from $\\textdollar 2000$ to $\\textdollar 2600$. Which are true?", ["Increase $= \\textdollar 600$", "Percentage increase $= 30\\%$", "Percentage increase $= \\frac{600}{2000} \\times 100\\%$", "New $= 2000 \\times 1.3$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "$15\\%$ of $200$ is $30$.", true));
  q.push(tf("medium", "The ratio $2 : 3$ is the same as $40\\% : 60\\%$.", true));
  q.push(tf("medium", "If $a : b = 2 : 3$ and $b : c = 4 : 5$, then $a : c = 8 : 15$.", true));
  q.push(tf("medium", "A discount of $25\\%$ followed by another $25\\%$ is the same as $50\\%$ off.", false, "$0.75 \\times 0.75 = 0.5625$, not $0.5$."));
  q.push(tf("medium", "$3$ kg for $\\textdollar 12$ is a rate of $\\textdollar 4$ per kg.", true));
  // fill in the blank
  q.push(num("medium", "$\\frac{4}{5}$ as a percentage = ___ (number only).", 80, 0));
  q.push(num("medium", "If $\\frac{x}{6} = \\frac{7}{3}$, then $x =$ ___.", 14, 0));
  q.push(num("medium", "A speed of $72$ km/h = ___ m/s.", 20, 0));
  q.push(num("medium", "Two numbers are in ratio $3 : 5$ and their sum is $64$. The smaller number is ___.", 24, 0));
  q.push(num("medium", "After a $12\\%$ increase a salary becomes $\\textdollar 560$. The original salary was ___.", 500, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Three numbers are in ratio $2 : 3 : 5$. If $c - a = 27$, find $b$.", ["$18$", "$27$", "$9$", "$45$"], 1, "$5k - 2k = 3k = 27 \\Rightarrow k = 9$, $b = 3k = 27$."));
  q.push(mc("hard", "Milk and water are in ratio $5 : 3$. After adding $4$ L of water the ratio becomes $5 : 5$. Original milk:", ["$5$ L", "$10$ L", "$12$ L", "$8$ L"], 1, "$\\frac{5k}{3k+4} = 1 \\Rightarrow k = 2$, milk $= 10$ L."));
  q.push(mc("hard", "After a $10\\%$ discount and then a $5\\%$ tax, the final price is $\\textdollar 94.50$. Original price:", ["$90$", "$99$", "$100$", "$95$"], 2, "$x \\times 0.9 \\times 1.05 = 94.50 \\Rightarrow x = 100$."));
  q.push(mc("hard", "A car travels $240$ km at $60$ km/h, then $180$ km at $45$ km/h. Average speed:", ["$52.5$ km/h", "$50$ km/h", "$54$ km/h", "$48$ km/h"], 0, "Total $420$ km in $8$ h $= 52.5$ km/h."));
  q.push(mc("hard", "If $\\frac{x}{y} = \\frac{3}{4}$ and $\\frac{y}{z} = \\frac{6}{7}$, find $x : z$.", ["$9 : 14$", "$18 : 28$", "$3 : 7$", "Both $9:14$ and $18:28$"], 3, "$\\frac{x}{z} = \\frac{3}{4} \\times \\frac{6}{7} = \\frac{18}{28} = \\frac{9}{14}$."));
  // multiple select
  q.push(ms("hard", "Which represent a $15\\%$ decrease?", ["Multiply by $0.85$", "Multiply by $0.15$", "$85\\%$ of the original", "Subtract $15\\%$ of the original"], [0, 2, 3]));
  q.push(ms("hard", "If $p : q = 5 : 7$ and $p + q = 96$, which are true?", ["$p = 40, q = 56$", "$p = 56, q = 40$", "$p = 30, q = 66$", "$p = 5k, q = 7k, k = 8$"], [0, 3]));
  q.push(ms("hard", "If $a : b = 2 : 3$, $b : c = 4 : 5$, $c : d = 5 : 6$, then $a : d =$", ["$8 : 45$", "$40 : 90$", "$4 : 15$", "$2 : 6$"], [1], "$a : d = 8 : 18 = 4 : 9 = 40 : 90$."));
  q.push(ms("hard", "A shop offers “Buy 3, get 1 free.” The discount percentage is:", ["$25\\%$", "$33.\\overline{3}\\%$", "$20\\%$", "$75\\%$"], [0], "Pay for 3 of 4, so $\\frac{1}{4} = 25\\%$ off."));
  q.push(ms("hard", "If $x : y = 5 : 3$ and $y : z = 7 : 2$, then $x : z =$", ["$35 : 6$", "$5.8\\overline{3} : 1$", "$5\\frac{5}{6} : 1$", "$12 : 5$"], [0, 1, 2], "$x : z = 35 : 6$."));
  // true / false
  q.push(tf("hard", "Increasing by $20\\%$ then decreasing by $20\\%$ returns to the original.", false, "$1.2 \\times 0.8 = 0.96$."));
  q.push(tf("hard", "If $a : b = 3 : 4$ and $a + b = 28$, then $a = 12$.", true));
  q.push(tf("hard", "$3 : 8$ is the same as $37.5\\%$.", true));
  q.push(tf("hard", "A ratio $5 : 2$ means the first quantity is $250\\%$ of the second.", true, "$\\frac{5}{2} = 2.5 = 250\\%$."));
  q.push(tf("hard", "If $\\frac{x}{3} = \\frac{y}{5} = \\frac{z}{9}$, then $x : y : z = 3 : 5 : 9$.", true));
  // fill in the blank
  q.push(num("hard", "Divide $\\textdollar 1200$ in the ratio $2 : 3 : 5$. The smallest share is ___.", 240, 0));
  q.push(fill("hard", "The compound ratio of $3 : 4$, $5 : 7$, and $2 : 3$, in simplest form, is ___ (write as p:q).", ["5:14", "5 : 14"]));
  q.push(num("hard", "If 5 men paint a house in 12 days, then 10 men take ___ days.", 6, 0));
  q.push(num("hard", "A number increased by $12\\%$ becomes $280$. The number is ___.", 250, 0));
  q.push(num("hard", "Two numbers are in ratio $4 : 7$. If $8$ is added to each, the ratio becomes $2 : 3$. The smaller number is ___.", 16, 0));

  return q;
}

// ── 2.1 Words → Algebraic Expressions ────────────────────────
export function gen21() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "“Five more than a number $x$” is written as:", ["$5x$", "$x + 5$", "$x - 5$", "$5 - x$"], 1));
  q.push(mc("easy", "“Twice a number $y$ decreased by 3” is:", ["$2y - 3$", "$3 - 2y$", "$2(y - 3)$", "$y^2 - 3$"], 0));
  q.push(mc("easy", "“The sum of a number $n$ and 7” is:", ["$n - 7$", "$7n$", "$n + 7$", "$\\frac{n}{7}$"], 2));
  q.push(mc("easy", "“A number $k$ divided by 4” is:", ["$4k$", "$k - 4$", "$\\frac{k}{4}$", "$k + 4$"], 2));
  q.push(mc("easy", "“Three less than twice $p$” is:", ["$3 - 2p$", "$2p - 3$", "$2(p - 3)$", "$3 - p$"], 1));
  // multiple select
  q.push(ms("easy", "Which expressions represent “a number $x$ increased by 10”?", ["$x + 10$", "$10 + x$", "$x - 10$", "$10x$"], [0, 1]));
  q.push(ms("easy", "“Half of a number $t$” can be written as:", ["$\\frac{t}{2}$", "$\\frac{1}{2}t$", "$0.5t$", "$t - \\frac{1}{2}$"], [0, 1, 2]));
  q.push(ms("easy", "Which represent “the product of 5 and $m$”?", ["$5m$", "$m \\times 5$", "$5 \\cdot m$", "$m + 5$"], [0, 1, 2]));
  q.push(ms("easy", "“The quotient of $y$ and 8” is:", ["$y \\div 8$", "$\\frac{y}{8}$", "$\\frac{8}{y}$", "$8y$"], [0, 1]));
  q.push(ms("easy", "Which equal “seven less than a number $w$”?", ["$w - 7$", "$7 - w$", "$w + (-7)$", "$7w$"], [0, 2]));
  // true / false
  q.push(tf("easy", "“$x + 3$” means 3 less than $x$.", false));
  q.push(tf("easy", "“$4n$” means 4 times $n$.", true));
  q.push(tf("easy", "“The sum of $a$ and $b$” is $a - b$.", false));
  q.push(tf("easy", "“$x^2$” means twice $x$.", false));
  q.push(tf("easy", "“$y - 2$” means 2 subtracted from $y$.", true));
  // fill in the blank (text answers; accept common spacings)
  q.push(fill("easy", "“A number $z$ plus 9” = ___.", ["z+9", "z + 9", "9+z", "9 + z"]));
  q.push(fill("easy", "“The difference of 12 and $k$” = ___.", ["12-k", "12 - k"]));
  q.push(fill("easy", "“$m$ divided by 3” = ___.", ["m/3", "\\frac{m}{3}"]));
  q.push(fill("easy", "“Three times the sum of $x$ and 4” = ___.", ["3(x+4)", "3(x + 4)"]));
  q.push(fill("easy", "“$p$ decreased by 10” = ___.", ["p-10", "p - 10"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "“The sum of three consecutive integers, the first being $n$” is:", ["$n + (n+1) + (n+2)$", "$3n + 3$", "$3n$", "Both $n+(n+1)+(n+2)$ and $3n+3$"], 3));
  q.push(ms("medium", "Which equal “twice the sum of a number $y$ and 5”?", ["$2y + 5$", "$2(y + 5)$", "$y + 10$", "$2y + 10$"], [1, 3], "$2(y+5) = 2y+10$."));
  q.push(mc("medium", "“The length of a rectangle is 3 more than twice its width $w$.” Length =", ["$3w + 2$", "$2w + 3$", "$3w - 2$", "$w + 3$"], 1));
  q.push(mc("medium", "“The average of $x$ and $y$” is:", ["$\\frac{x + y}{2}$", "$x + y$", "$\\frac{xy}{2}$", "$2(x + y)$"], 0));
  q.push(mc("medium", "“Four less than three times a number $m$” =", ["$4 - 3m$", "$3m - 4$", "$3(m - 4)$", "$m - 4$"], 1));
  // multiple select
  q.push(ms("medium", "“The perimeter of a square with side $s$” can be:", ["$s + s + s + s$", "$4s$", "$s^2$", "$2s + 2s$"], [0, 1, 3]));
  q.push(ms("medium", "“The cost of $n$ pens at $\\textdollar 3$ each and $m$ erasers at $\\textdollar 2$ each” =", ["$3n + 2m$", "$5nm$", "$3n + 2m$ dollars", "$n + m$"], [0, 2]));
  q.push(ms("medium", "“The age of John 5 years ago, if his current age is $a$” =", ["$a - 5$", "$5 - a$", "$a + (-5)$", "$a \\times 5$"], [0, 2]));
  q.push(ms("medium", "“A number $k$ squared, then increased by 1” =", ["$k^2 + 1$", "$(k + 1)^2$", "$1 + k^2$", "$2k + 1$"], [0, 2]));
  q.push(ms("medium", "“The sum of two consecutive even numbers, the smaller being $n$” =", ["$n + (n+2)$", "$2n + 2$", "$2(n+1)$", "$2n$"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "“The product of $x$ and $y$ divided by 3” $= \\frac{xy}{3}$.", true));
  q.push(tf("medium", "“$2n + 1$” always represents an odd integer (for integer $n$).", true));
  q.push(tf("medium", "“The square of the sum of $a$ and $b$” $= a^2 + b^2$.", false, "It is $(a+b)^2 = a^2 + 2ab + b^2$."));
  q.push(tf("medium", "“Three more than twice the square of a number” $= 3 + 2n^2$.", true));
  q.push(tf("medium", "“Subtract 7 from $w$ and then divide by 4” $= \\frac{w - 7}{4}$.", true));
  // fill in the blank
  q.push(fill("medium", "“The difference of twice $y$ and 9” = ___.", ["2y-9", "2y - 9"]));
  q.push(fill("medium", "“The product of a number $r$ and 4, decreased by 7” = ___.", ["4r-7", "4r - 7"]));
  q.push(fill("medium", "“The total cost of $x$ books at $\\textdollar 12$ each and $y$ pens at $\\textdollar 2.50$ each” = ___.", ["12x+2.5y", "12x + 2.5y"]));
  q.push(fill("medium", "“Five less than three times the sum of $m$ and 2” = ___.", ["3(m+2)-5", "3(m + 2) - 5"]));
  q.push(fill("medium", "“The sum of a number $p$ and its reciprocal” = ___.", ["p+1/p", "p + 1/p", "p+\\frac{1}{p}"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "“The sum of three consecutive odd integers, the middle being $m$” =", ["$(m-2) + m + (m+2)$", "$3m$", "$(m-1) + m + (m+1)$", "Both $(m-2)+m+(m+2)$ and $3m$"], 3, "Consecutive odd integers differ by 2: $m-2, m, m+2$, sum $3m$."));
  q.push(ms("hard", "“Length is 5 less than twice the width $w$; the perimeter is 50.” Which equations model this?", ["$2(w + (2w - 5)) = 50$", "$w + (2w - 5) = 50$", "$2w + (2w - 5) = 50$", "$2(w + 2w - 5) = 50$"], [0, 3]));
  q.push(mc("hard", "“If $x$ is the first integer, the sum of four consecutive integers starting at $x$” =", ["$4x + 6$", "$x + (x+1) + (x+2) + (x+3)$", "$4x + 3$", "Both $4x+6$ and the expanded sum"], 3, "$x+(x+1)+(x+2)+(x+3) = 4x+6$."));
  q.push(ms("hard", "“A father is 4 times his son’s age. In 10 years the father will be twice the son.” With son’s age $s$, which are correct?", ["$4s + 10 = 2(s + 10)$", "$4s = 2s + 10$", "$4s + 10 = 2s + 20$", "$4s = 2(s + 10)$"], [0, 2], "$4s+10 = 2(s+10) = 2s+20$."));
  q.push(mc("hard", "“The average of three numbers is $a$.” The sum of the three numbers is:", ["$3a$", "$\\frac{a}{3}$", "$a + 3$", "$a^3$"], 0));
  // multiple select
  q.push(ms("hard", "“Mary is $m$; her brother is 3 years younger. In 5 years the sum of their ages is 41.” Which model this?", ["$m + (m - 3) + 10 = 41$", "$(m + 5) + (m - 3 + 5) = 41$", "$2m + 2 = 41$", "$2m + 7 = 41$"], [0, 1, 3]));
  q.push(ms("hard", "“Width $w$; length is 3 more than twice the width; perimeter is 54.” Which give $w$?", ["$2(w + 2w + 3) = 54$", "$6w + 6 = 54$", "$w + (2w + 3) = 27$", "$3w + 3 = 27$"], [0, 1, 2, 3]));
  q.push(ms("hard", "“The difference of a number and its reciprocal is 1.” With number $x$, which are correct?", ["$x - \\frac{1}{x} = 1$", "$x^2 - 1 = x$", "$x^2 - x - 1 = 0$", "$x = \\frac{1}{x} + 1$"], [0, 1, 2, 3]));
  q.push(ms("hard", "“The product of two consecutive integers is 42; the smaller is $n$.” Which are correct?", ["$n(n+1) = 42$", "$n^2 + n - 42 = 0$", "$n = 6$ or $n = -7$", "$n = 7$ or $n = -6$"], [0, 1, 2]));
  q.push(ms("hard", "“The area of a rectangle is 48; its length is 2 less than twice the width $w$.” Which are correct?", ["$w(2w - 2) = 48$", "$2w^2 - 2w - 48 = 0$", "$w^2 - w - 24 = 0$", "$w(2w + 2) = 48$"], [0, 1, 2]));
  // true / false
  q.push(tf("hard", "“The square of the sum of $n$ and 1” $= n^2 + 2n + 1$.", true));
  q.push(tf("hard", "“The sum of three consecutive multiples of 3, starting at $3k$” $= 9k + 9$.", true));
  q.push(tf("hard", "“The price of $x$ kg at $\\textdollar 5$ per kg plus a $\\textdollar 3$ fixed fee” $= 5x + 3$.", true));
  q.push(tf("hard", "If $t$ is the tens digit and $u$ the units digit, the two-digit number $= 10t + u$.", true));
  q.push(tf("hard", "“Four times the difference of a number and 7” $= 4x - 28$.", true));
  // fill in the blank
  q.push(fill("hard", "“The sum of two consecutive even integers, the larger being $L$” = ___.", ["2L-2", "2L - 2"]));
  q.push(fill("hard", "The next even integer after an even integer $n$ is ___.", ["n+2", "n + 2"]));
  q.push(fill("hard", "“The area of a triangle with base $b$ and height 3 less than the base” = ___.", ["b(b-3)/2", "\\frac{b(b-3)}{2}"]));
  q.push(num("hard", "A number plus its reciprocal equals $\\frac{5}{2}$. The larger value of the number is ___.", 2, 0, "$x + \\frac{1}{x} = \\frac{5}{2} \\Rightarrow 2x^2 - 5x + 2 = 0 \\Rightarrow x = 2$ or $\\frac{1}{2}$."));
  q.push(num("hard", "Two numbers differ by 2 and their product is 48. The smaller positive number $s$ (where $s(s+2)=48$) is ___.", 6, 0, "$s^2 + 2s - 48 = 0 \\Rightarrow (s+8)(s-6)=0 \\Rightarrow s = 6$."));

  return q;
}

// ── 2.2 Equivalent Expressions ───────────────────────────────
export function gen22() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Simplify $3x + 2x$.", ["$5x$", "$6x$", "$5x^2$", "$x$"], 0));
  q.push(mc("easy", "Simplify $4y - y$.", ["$4y$", "$3y$", "$5y$", "$y$"], 1));
  q.push(mc("easy", "Expand $3(a + 2)$.", ["$3a + 2$", "$a + 6$", "$3a + 6$", "$3a + 5$"], 2));
  q.push(mc("easy", "Simplify $2x + 3y + 4x - y$.", ["$6x + 4y$", "$6x + 2y$", "$6x - 2y$", "$2x + 4y$"], 1));
  q.push(mc("easy", "Which is equivalent to $5x - 3x + 2$?", ["$2x + 2$", "$8x + 2$", "$5x - 1$", "$2x - 2$"], 0));
  // multiple select
  q.push(ms("easy", "Which are equivalent to $4x + 2x$?", ["$6x$", "$x + 5x$", "$2x + 4x$", "$8x - 2x$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are equivalent to $2(3y + 4)$?", ["$6y + 8$", "$2 \\times 3y + 2 \\times 4$", "$6y + 4$", "$3y + 4 + 3y + 4$"], [0, 1, 3]));
  q.push(ms("easy", "Which equal $5a - 3a + 2b$?", ["$2a + 2b$", "$2(a + b)$", "$5a - 3a + 2b$", "$2a + b$"], [0, 1, 2]));
  q.push(ms("easy", "Which expressions are equivalent to $6x + 9$?", ["$3(2x + 3)$", "$6x + 9$", "$2(3x + 4.5)$", "$3(2x + 9)$"], [0, 1, 2]));
  q.push(ms("easy", "Which simplify to $4x$?", ["$2x + 2x$", "$x + 3x$", "$5x - x$", "$4x + 0$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("easy", "$3x + 4x = 7x$.", true));
  q.push(tf("easy", "$2(y + 3) = 2y + 6$.", true));
  q.push(tf("easy", "$5a - 2a = 3a^2$.", false, "$5a - 2a = 3a$."));
  q.push(tf("easy", "$x + x + x = 3x$.", true));
  q.push(tf("easy", "$4(2m + 1) = 8m + 4$.", true));
  // fill in the blank
  q.push(fill("easy", "$3x + 5x = $ ___.", ["8x"]));
  q.push(fill("easy", "$4(a + 2) = $ ___.", ["4a+8", "4a + 8"]));
  q.push(fill("easy", "$7y - 3y = $ ___.", ["4y"]));
  q.push(fill("easy", "$2x + 3y - x + y = $ ___.", ["x+4y", "x + 4y"]));
  q.push(fill("easy", "$5(2m - 3) = $ ___.", ["10m-15", "10m - 15"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Simplify $3(x - 4) + 2x$.", ["$5x - 12$", "$5x - 4$", "$5x + 12$", "$x - 12$"], 0, "$3x - 12 + 2x = 5x - 12$."));
  q.push(mc("medium", "Factor fully $6x + 9$.", ["$3(2x + 3)$", "$3(2x + 9)$", "$6(x + 1.5)$", "$2(3x + 4)$"], 0, "GCF is 3: $3(2x+3)$ (factored over integers)."));
  q.push(mc("medium", "Which is equivalent to $2x^2 + 3x - x^2 - 5x$?", ["$x^2 + 2x$", "$x^2 - 2x$", "$3x^2 - 2x$", "$x^2 - 8x$"], 1));
  q.push(mc("medium", "Expand $(2x + 3)(x + 4)$.", ["$2x^2 + 11x + 12$", "$2x^2 + 8x + 12$", "$2x^2 + 11x + 7$", "$2x^2 + 5x + 12$"], 0, "$2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$."));
  q.push(mc("medium", "Simplify $3(2a - b) - 2(a - 3b)$.", ["$4a + 3b$", "$4a - 3b$", "$4a - 7b$", "$8a + 3b$"], 0, "$6a - 3b - 2a + 6b = 4a + 3b$."));
  // multiple select
  q.push(ms("medium", "Which are equivalent to $2(3x + 4) - 6$?", ["$6x + 8 - 6$", "$6x + 2$", "$2(3x + 1)$", "$6x - 2$"], [0, 1, 2]));
  q.push(ms("medium", "Which are equivalent to $4x^2 - 6x$?", ["$2x(2x - 3)$", "$2x(2x + 3)$", "$4x(x - 1.5)$", "$x(4x - 6)$"], [0, 2, 3]));
  q.push(ms("medium", "Which are equivalent to $(x + 3)(x + 2)$?", ["$x^2 + 5x + 6$", "$x^2 + 2x + 3x + 6$", "$(x + 2)(x + 3)$", "$x^2 + 6x + 6$"], [0, 1, 2]));
  q.push(ms("medium", "Which expressions simplify to $7x - 14$?", ["$7(x - 2)$", "$3x + 4x - 14$", "$7x - 7 - 7$", "$x + 6x - 14$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A rectangle has length $2x + 3$ and width $x - 1$. Which represent its perimeter?", ["$2[(2x+3) + (x-1)]$", "$6x + 4$", "$4x + 6 + 2x - 2$", "$6x + 2$"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "$2(x + 3) + 4x = 6x + 6$.", true));
  q.push(tf("medium", "$3a - 2b + a + b = 4a - b$.", true));
  q.push(tf("medium", "$(x + 1)^2 = x^2 + 1$.", false, "$(x+1)^2 = x^2 + 2x + 1$."));
  q.push(tf("medium", "$4x^2 - 8x = 4x(x - 2)$.", true));
  q.push(tf("medium", "$5(m - 2) - 3(m + 1) = 2m - 13$.", true, "$5m - 10 - 3m - 3 = 2m - 13$."));
  // fill in the blank
  q.push(fill("medium", "Simplify $2(x + 3) - (x - 4) = $ ___.", ["x+10", "x + 10"]));
  q.push(fill("medium", "Factor fully $12x - 18 = $ ___.", ["6(2x-3)", "6(2x - 3)"]));
  q.push(fill("medium", "Expand $(2x - 1)(x + 5) = $ ___.", ["2x^2+9x-5", "2x^2 + 9x - 5"]));
  q.push(fill("medium", "Simplify $3a^2 - 2a + a^2 + 5a = $ ___.", ["4a^2+3a", "4a^2 + 3a"]));
  q.push(fill("medium", "The simplified perimeter of a rectangle with length $2x + 1$ and width $x - 2$ is ___.", ["6x-2", "6x - 2"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Simplify $(3x - 2)(2x + 1) - (x - 3)(x + 2)$.", ["$5x^2 + 4$", "$5x^2 - x - 4$", "$5x^2 + 7x + 4$", "$5x^2 - 7x + 4$"], 0, "$(6x^2 - x - 2) - (x^2 - x - 6) = 5x^2 + 4$."));
  q.push(mc("hard", "Factor completely $12x^2 - 18x - 6$.", ["$6(2x^2 - 3x - 1)$", "$6(2x + 1)(x - 1)$", "$6(2x - 1)(x + 1)$", "$12(x - 1)(x + 0.5)$"], 0, "GCF 6; $2x^2 - 3x - 1$ has no integer factors."));
  q.push(mc("hard", "Which is equivalent to $\\frac{2x}{3} - \\frac{x-1}{6}$?", ["$\\frac{3x+1}{6}$", "$\\frac{x+1}{6}$", "$\\frac{4x-x+1}{6}$", "Both $\\frac{3x+1}{6}$ and $\\frac{4x-x+1}{6}$"], 3, "$\\frac{4x}{6} - \\frac{x-1}{6} = \\frac{3x+1}{6}$."));
  q.push(mc("hard", "Simplify $(2a - 3b)^2 - (a + b)(a - b)$.", ["$3a^2 - 12ab + 10b^2$", "$3a^2 - 12ab + 8b^2$", "$4a^2 - 12ab + 9b^2 - a^2 + b^2$", "Both $3a^2-12ab+10b^2$ and $4a^2-12ab+9b^2-a^2+b^2$"], 3, "$(4a^2 - 12ab + 9b^2) - (a^2 - b^2) = 3a^2 - 12ab + 10b^2$."));
  q.push(mc("hard", "A triangle's perimeter is $12x - 6$. Two sides are $3x + 4$ and $5x - 2$. The third side is:", ["$4x - 8$", "$4x + 8$", "$4x - 4$", "$4x + 4$"], 0, "$(12x-6) - (8x+2) = 4x - 8$."));
  // multiple select
  q.push(ms("hard", "Which are equivalent to $(3x + 2)^2 - (3x - 2)^2$?", ["$24x$", "$(9x^2 + 12x + 4) - (9x^2 - 12x + 4)$", "$12x$", "$12x + 12x$"], [0, 1, 3]));
  q.push(ms("hard", "Factor completely $2x^2 - 8x - 10$. Which are correct?", ["$2(x - 5)(x + 1)$", "$2(x + 5)(x - 1)$", "$2(x^2 - 4x - 5)$", "$(x - 5)(2x + 2)$"], [0, 2, 3], "$2x^2 - 8x - 10 = 2(x-5)(x+1)$."));
  q.push(ms("hard", "Which expressions are equivalent to $\\frac{3x + 6}{3}$?", ["$x + 2$", "$\\frac{3x}{3} + \\frac{6}{3}$", "$3x + 6$", "$3x + 2$"], [0, 1]));
  q.push(ms("hard", "A garden has length $2x + 5$ and width $x - 3$. Which represent its area?", ["$2x^2 - x - 15$", "$(2x + 5)(x - 3)$", "$2x^2 - 6x + 5x - 15$", "$2x^2 + x - 15$"], [0, 1, 2]));
  q.push(ms("hard", "Simplify $\\frac{4x^2 - 1}{2x - 1} - 2x$ (for $x \\neq \\frac{1}{2}$). Which equal it?", ["$2x - 1$", "$-1$", "$1$", "$2x + 1 - 2x$"], [2, 3], "$\\frac{(2x-1)(2x+1)}{2x-1} - 2x = (2x+1) - 2x = 1$."));
  // true / false
  q.push(tf("hard", "$(x - y)^2 = x^2 - 2xy + y^2$.", true));
  q.push(tf("hard", "$\\frac{6x^2 - 9x}{3x} = 2x - 3$ for $x \\neq 0$.", true));
  q.push(tf("hard", "$(a + b)(a - b) = a^2 - b^2$.", true));
  q.push(tf("hard", "$4(2x - 3) - 2(4x - 6) = 0$ for all $x$.", true, "$8x - 12 - 8x + 12 = 0$."));
  q.push(tf("hard", "$\\frac{2x}{3} + \\frac{x}{2} = \\frac{7x}{6}$.", true));
  // fill in the blank
  q.push(fill("hard", "Simplify $(2x + 1)(x - 3) - (x - 2)(x + 3) = $ ___.", ["x^2-6x+3", "x^2 - 6x + 3"]));
  q.push(fill("hard", "Factor completely $3x^2 - 12x - 15 = $ ___.", ["3(x-5)(x+1)", "3(x - 5)(x + 1)"]));
  q.push(fill("hard", "Simplify $\\frac{5x}{2} - \\frac{3x - 1}{4} = $ ___ (single fraction).", ["(7x+1)/4", "\\frac{7x+1}{4}"]));
  q.push(fill("hard", "If the area of a square is $4x^2 + 12x + 9$, its side length = ___.", ["2x+3", "2x + 3"]));
  q.push(fill("hard", "Simplify $(3a - 2b)^2 - (a + b)(a - b) = $ ___.", ["8a^2-12ab+5b^2", "8a^2 - 12ab + 5b^2"]));

  return q;
}

// ── 2.3 Simplifying Expressions ──────────────────────────────
export function gen23() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Simplify $5x + 3x - 2x$.", ["$6x$", "$10x$", "$6x^2$", "$x$"], 0));
  q.push(mc("easy", "Simplify $4a - 2a + 3b - b$.", ["$2a + 2b$", "$2a + 4b$", "$6a + 2b$", "$2a - 2b$"], 0));
  q.push(mc("easy", "Simplify $3(2x + 4)$.", ["$6x + 4$", "$6x + 12$", "$5x + 7$", "$6x + 7$"], 1));
  q.push(mc("easy", "Simplify $7y - 3y + 2$.", ["$4y + 2$", "$4y - 2$", "$10y + 2$", "$4y$"], 0));
  q.push(mc("easy", "Simplify $2x + 5 - x - 3$.", ["$x + 2$", "$x + 8$", "$3x + 2$", "$x - 2$"], 0));
  // multiple select
  q.push(ms("easy", "Which are equivalent to $3x + 4x - x$?", ["$6x$", "$7x - x$", "$x + 5x$", "$3x + 3x$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which expressions simplify to $4a - 2b$?", ["$2a + 2a - 2b$", "$3a - 2b + a$", "$5a - a - 2b$", "$4a - b - b$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are equivalent to $2(3x - 4)$?", ["$6x - 8$", "$3(2x) - 4(2)$", "$6x - 8 + 0$", "$2x + 4x - 8$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which equal $5m - 3m + 7$?", ["$2m + 7$", "$m + m + 7$", "$5m - 3m + 7$", "$2(m + 3) + 1$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which simplify to $3x + 5y$? (from $4x + 2y - x + 3y$)", ["$3x + 5y$", "$4x - x + 2y + 3y$", "$x(3) + y(5)$", "$5x + 5y$"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "$5x - 2x = 3x$.", true));
  q.push(tf("easy", "$3(a + 2) = 3a + 6$.", true));
  q.push(tf("easy", "$4y + 3y = 7y^2$.", false, "$4y + 3y = 7y$."));
  q.push(tf("easy", "$2x + 3 - x + 1 = x + 4$.", true));
  q.push(tf("easy", "$6m - 2m + 3 = 4m + 3$.", true));
  // fill in the blank
  q.push(fill("easy", "$7x - 4x = $ ___.", ["3x"]));
  q.push(fill("easy", "$3(2y + 5) = $ ___.", ["6y+15", "6y + 15"]));
  q.push(fill("easy", "$5a + 2b - 3a + b = $ ___.", ["2a+3b", "2a + 3b"]));
  q.push(fill("easy", "$4x + 6 - 2x - 3 = $ ___.", ["2x+3", "2x + 3"]));
  q.push(fill("easy", "$2(3m - 1) + 4 = $ ___.", ["6m+2", "6m + 2"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Simplify $3(2x - 5) - 4(x + 2)$.", ["$2x - 23$", "$2x - 7$", "$6x - 15 - 4x - 8$", "Both $2x-23$ and $6x-15-4x-8$"], 3, "$6x - 15 - 4x - 8 = 2x - 23$."));
  q.push(mc("medium", "Simplify $\\frac{2x}{3} + \\frac{x}{6}$.", ["$\\frac{3x}{6}$", "$\\frac{5x}{6}$", "$\\frac{x}{2}$", "$x$"], 1, "$\\frac{4x}{6} + \\frac{x}{6} = \\frac{5x}{6}$."));
  q.push(mc("medium", "Simplify $5x - [3x - (2x - 4)]$.", ["$4x - 4$", "$4x + 4$", "$6x - 4$", "$2x + 4$"], 0, "$3x-(2x-4)=x+4$; $5x-(x+4)=4x-4$."));
  q.push(mc("medium", "Simplify $(2x + 3)(x - 4)$.", ["$2x^2 - 5x - 12$", "$2x^2 + 5x - 12$", "$2x^2 - 8x - 12$", "$2x^2 - 11x - 12$"], 0, "$2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$."));
  q.push(mc("medium", "Simplify $\\frac{3x - 6}{3} + 2x$.", ["$3x - 2$", "$x - 2$", "$3x - 8$", "$3x + 2$"], 0, "$x - 2 + 2x = 3x - 2$."));
  // multiple select
  q.push(ms("medium", "Which are equivalent to $2(x + 3) - 3(x - 2)$?", ["$-x + 12$", "$2x + 6 - 3x + 6$", "$12 - x$", "$x + 12$"], [0, 1, 2]));
  q.push(ms("medium", "Which simplify to $5x - 2$?", ["$3x - 2 + 2x$", "$5x + 4 - 6$", "$2(2x - 1) + x$", "$5x - 2 + 0$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are equivalent to $\\frac{4x}{5} - \\frac{2x}{3}$?", ["$\\frac{12x - 10x}{15}$", "$\\frac{2x}{15}$", "$\\frac{4x}{5} - \\frac{2x}{3}$", "$\\frac{6x}{15}$"], [0, 1, 2]));
  q.push(ms("medium", "Which expressions are equivalent to $(x + 2)(x - 3)$?", ["$x^2 - x - 6$", "$x^2 - 3x + 2x - 6$", "$(x - 3)(x + 2)$", "$x^2 + x - 6$"], [0, 1, 2]));
  q.push(ms("medium", "A rectangle has length $3x - 2$ and width $x + 4$. Which represent its perimeter?", ["$8x + 4$", "$2[(3x - 2) + (x + 4)]$", "$6x - 4 + 2x + 8$", "$8x - 4$"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "$3x - (2x - 5) = x + 5$.", true));
  q.push(tf("medium", "$\\frac{2x}{3} + \\frac{x}{2} = \\frac{7x}{6}$.", true));
  q.push(tf("medium", "$(x - 2)(x + 2) = x^2 - 4$.", true));
  q.push(tf("medium", "$4x - 2(3x - 1) = -2x + 2$.", true, "$4x - 6x + 2 = -2x + 2$."));
  q.push(tf("medium", "$\\frac{6x - 9}{3} = 2x - 3$.", true));
  // fill in the blank
  q.push(fill("medium", "Simplify $3(x - 2) - 2(x - 3) = $ ___.", ["x"]));
  q.push(fill("medium", "Simplify $\\frac{5x}{6} - \\frac{x}{3} = $ ___ (simplest form).", ["x/2", "\\frac{x}{2}"]));
  q.push(fill("medium", "Simplify $(2x + 1)(x - 3) = $ ___.", ["2x^2-5x-3", "2x^2 - 5x - 3"]));
  q.push(fill("medium", "Simplify $4x - 2(3x - 5) + 7 = $ ___.", ["-2x+17", "-2x + 17"]));
  q.push(fill("medium", "The perimeter of a triangle with sides $2x + 1$, $x - 3$, and $3x + 2$ is ___.", ["6x"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Simplify $\\frac{2x - 3}{4} - \\frac{x + 1}{3}$.", ["$\\frac{2x - 13}{12}$", "$\\frac{2x + 13}{12}$", "$\\frac{6x - 9 - 4x - 4}{12}$", "Both $\\frac{2x-13}{12}$ and $\\frac{6x-9-4x-4}{12}$"], 3, "$\\frac{3(2x-3) - 4(x+1)}{12} = \\frac{2x - 13}{12}$."));
  q.push(mc("hard", "Simplify $(3x - 2)^2 - (x - 4)(x + 4)$.", ["$8x^2 - 12x + 20$", "$8x^2 - 12x - 20$", "$9x^2 - 12x + 4 - x^2 + 16$", "Both $8x^2-12x+20$ and $9x^2-12x+4-x^2+16$"], 3, "$9x^2 - 12x + 4 - (x^2 - 16) = 8x^2 - 12x + 20$."));
  q.push(ms("hard", "Simplify $\\frac{2x}{x - 1} - \\frac{3}{x + 1}$ ($x \\neq \\pm 1$). Which are correct?", ["$\\frac{2x^2 - x - 3}{(x-1)(x+1)}$", "$\\frac{2x^2 + 2x - 3x + 3}{(x-1)(x+1)}$", "$\\frac{2x^2 - x + 3}{(x-1)(x+1)}$", "$\\frac{2x^2 - x - 3}{x^2 - 1}$"], [1, 2], "$2x(x+1) - 3(x-1) = 2x^2 - x + 3$ (numerator $+3$)."));
  q.push(mc("hard", "Simplify $\\frac{3}{x} - \\frac{2}{x+1} + \\frac{1}{x(x+1)}$.", ["$\\frac{3x+3 - 2x + 1}{x(x+1)}$", "$\\frac{x + 4}{x(x+1)}$", "$\\frac{3(x+1) - 2x + 1}{x(x+1)}$", "All of A, B, C"], 3, "$3(x+1) - 2x + 1 = x + 4$."));
  q.push(mc("hard", "The area of a rectangle is $2x^2 + 11x + 12$. One side is $x + 4$. The other side is:", ["$2x + 3$", "$2x - 3$", "$x + 3$", "$2x + 6$"], 0, "$(2x+3)(x+4) = 2x^2 + 11x + 12$."));
  // multiple select
  q.push(ms("hard", "Which are equivalent to $\\frac{2x}{3} - \\frac{x - 1}{2}$?", ["$\\frac{4x - 3x + 3}{6}$", "$\\frac{x + 3}{6}$", "$\\frac{2x}{3} - \\frac{x}{2} + \\frac{1}{2}$", "$\\frac{x - 3}{6}$"], [0, 1, 2], "$\\frac{4x - 3(x-1)}{6} = \\frac{x+3}{6}$."));
  q.push(ms("hard", "Simplify $(2x + 3)(x - 2) - (x - 1)(x + 5)$. Which are correct?", ["$x^2 - 6x - 1$", "$2x^2 - x - 6 - (x^2 + 4x - 5)$", "$x^2 - 5x - 1$", "$x^2 - 7x - 1$"], [1, 2], "$(2x^2 - x - 6) - (x^2 + 4x - 5) = x^2 - 5x - 1$."));
  q.push(ms("hard", "Which expressions simplify to $3x^2 - 8x + 4$?", ["$(3x - 2)(x - 2)$", "$3x^2 - 6x - 2x + 4$", "$(3x - 1)(x - 4)$", "$3(x - 2)(x - \\frac{2}{3})$"], [0, 1, 3], "$(3x-1)(x-4) = 3x^2 - 13x + 4 \\neq$."));
  q.push(ms("hard", "Simplify $\\frac{4}{x} - \\frac{3}{x-2} + \\frac{2}{x(x-2)}$. Which are correct?", ["$\\frac{4(x-2) - 3x + 2}{x(x-2)}$", "$\\frac{4x - 8 - 3x + 2}{x(x-2)}$", "$\\frac{x - 6}{x(x-2)}$", "$\\frac{x - 6}{x^2 - 2x}$"], [0, 1, 2, 3]));
  q.push(ms("hard", "The perimeter of a square is $8x^2 - 20x + 12$. Which equal its side length?", ["$2x^2 - 5x + 3$", "$4x^2 - 10x + 6$", "$(2x - 3)(x - 1)$", "$2x^2 - 5x + 4$"], [0, 2], "Side $= \\frac{8x^2 - 20x + 12}{4} = 2x^2 - 5x + 3 = (2x-3)(x-1)$."));
  // true / false
  q.push(tf("hard", "$\\frac{x - 2}{3} - \\frac{x + 1}{6} = \\frac{x - 5}{6}$.", true, "$\\frac{2(x-2) - (x+1)}{6} = \\frac{x-5}{6}$."));
  q.push(tf("hard", "$(2x - 1)(x + 3) - (x - 2)(2x + 1) = 6x - 1$.", false, "It equals $8x - 1$."));
  q.push(tf("hard", "$\\frac{2}{3x} + \\frac{1}{2x} = \\frac{7}{6x}$ for $x \\neq 0$.", true));
  q.push(tf("hard", "$(x + y)^2 - (x - y)^2 = 4xy$.", true));
  q.push(tf("hard", "$\\frac{5x^2 - 10x}{5x} = x - 2$ for $x \\neq 0$.", true));
  // fill in the blank
  q.push(fill("hard", "Simplify $\\frac{3x - 2}{4} - \\frac{2x + 3}{6} = $ ___ (single fraction).", ["(5x-12)/12", "\\frac{5x-12}{12}"]));
  q.push(fill("hard", "Simplify $(2x + 1)(x - 3) - (x + 2)(x - 1) = $ ___.", ["x^2-6x-1", "x^2 - 6x - 1"]));
  q.push(fill("hard", "Simplify $\\frac{2}{x} + \\frac{3}{x+1} - \\frac{5}{x(x+1)} = $ ___ (single fraction).", ["(5x-3)/(x(x+1))", "\\frac{5x-3}{x(x+1)}"]));
  q.push(fill("hard", "If the area of a rectangle is $6x^2 - x - 12$ and the length is $3x + 4$, the width is ___.", ["2x-3", "2x - 3"]));
  q.push(fill("hard", "Simplify $\\frac{x}{2} - \\frac{x - 3}{3} + \\frac{2x + 1}{6} = $ ___ (single fraction).", ["(3x+7)/6", "\\frac{3x+7}{6}"]));

  return q;
}

// ── 2.4 Creating & Solving Equations ─────────────────────────
export function gen24() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Solve $x + 7 = 12$.", ["$5$", "$19$", "$-5$", "$12$"], 0));
  q.push(mc("easy", "Solve $3x = 18$.", ["$6$", "$54$", "$15$", "$21$"], 0));
  q.push(mc("easy", "Solve $\\frac{x}{4} = 5$.", ["$9$", "$1.25$", "$20$", "$15$"], 2));
  q.push(mc("easy", "Solve $2x - 3 = 7$.", ["$2$", "$5$", "$10$", "$4$"], 1));
  q.push(mc("easy", "“A number increased by 8 is 15.” The equation is:", ["$x + 8 = 15$", "$8x = 15$", "$x - 8 = 15$", "$x + 15 = 8$"], 0));
  // multiple select
  q.push(ms("easy", "Which equations have solution $x = 6$?", ["$x + 2 = 8$", "$3x = 18$", "$x - 4 = 2$", "$\\frac{x}{2} = 3$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which represent “twice a number is 14”?", ["$2x = 14$", "$x + x = 14$", "$x = 7$", "$x \\cdot 2 = 14$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Solve $x + 9 = 4$.", ["$x = -5$", "$x = 13$", "$x = 5$", "$x = -13$"], [0]));
  q.push(ms("easy", "Which are true for $x = 4$?", ["$3x + 2 = 14$", "$5x - 3 = 17$", "$2x + 5 = 13$", "$x + 6 = 10$"], [0, 1, 2, 3]));
  q.push(ms("easy", "“A number divided by 3 is 8” can be written as:", ["$\\frac{x}{3} = 8$", "$x = 24$", "$3x = 8$", "$\\frac{x}{3} - 8 = 0$"], [0, 1, 3]));
  // true / false
  q.push(tf("easy", "$x + 5 = 12$ has solution $x = 7$.", true));
  q.push(tf("easy", "$4x = 20$ has solution $x = 5$.", true));
  q.push(tf("easy", "$x - 3 = 7$ has solution $x = 4$.", false, "$x = 10$."));
  q.push(tf("easy", "$\\frac{x}{2} = 9$ has solution $x = 18$.", true));
  q.push(tf("easy", "“Three less than a number is 10” translates to $x - 3 = 10$.", true));
  // fill in the blank
  q.push(num("easy", "Solve $x + 6 = 15$. $x =$ ___.", 9, 0));
  q.push(num("easy", "Solve $5x = 35$. $x =$ ___.", 7, 0));
  q.push(num("easy", "Solve $\\frac{x}{3} = 12$. $x =$ ___.", 36, 0));
  q.push(num("easy", "Solve $2x - 5 = 9$. $x =$ ___.", 7, 0));
  q.push(num("easy", "“A number decreased by 11 is 4” gives $x - 11 = 4$, so $x =$ ___.", 15, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Solve $3(x - 4) = 15$.", ["$x = 9$", "$x = 7$", "$x = 11$", "$x = 5$"], 0, "$3x - 12 = 15 \\Rightarrow x = 9$."));
  q.push(mc("medium", "The sum of a number and 8 is 23. The number is:", ["$15$", "$31$", "$184$", "$7$"], 0));
  q.push(mc("medium", "If $5x + 3 = 28$, then $x =$", ["$5$", "$25$", "$6.2$", "$31$"], 0));
  q.push(mc("medium", "Three times a number minus 7 equals 20. The number is:", ["$9$", "$13$", "$27$", "$4.33$"], 0, "$3x - 7 = 20 \\Rightarrow x = 9$."));
  q.push(ms("medium", "The perimeter of a square is 36 cm. Which are correct about its side $s$?", ["$4s = 36$", "$s^2 = 36$", "$s + 4 = 36$", "$s = 9$"], [0, 3]));
  // multiple select
  q.push(ms("medium", "Which equations have solution $x = 5$?", ["$2x + 3 = 13$", "$3x - 7 = 8$", "$4x + 2 = 22$", "$5x - 10 = 15$"], [0, 1, 2, 3]));
  q.push(ms("medium", "“Four less than twice a number is 12” can be written as:", ["$2x - 4 = 12$", "$4 - 2x = 12$", "$2(x - 2) = 12$", "$2x = 16$"], [0, 2, 3]));
  q.push(ms("medium", "Solve $\\frac{x}{3} + 2 = 8$. Which are correct?", ["$x = 18$", "$\\frac{x}{3} = 6$", "$x = 2$", "$x = 18 + 0$"], [0, 1, 3]));
  q.push(ms("medium", "The sum of two consecutive integers is 31. If the smaller is $x$, then:", ["$x + (x+1) = 31$", "$2x + 1 = 31$", "$x = 15$", "$x = 16$"], [0, 1, 2]));
  q.push(ms("medium", "A rectangle has length $2x + 3$ and width $x$, perimeter 30. Which equations work?", ["$2(2x + 3 + x) = 30$", "$6x + 6 = 30$", "$3x + 3 = 15$", "$2x + 3 + x = 15$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "If $3x + 4 = 19$, then $x = 5$.", true));
  q.push(tf("medium", "“7 less than twice a number is 9” is $2x - 7 = 9$.", true));
  q.push(tf("medium", "If $\\frac{x}{4} - 3 = 2$, then $x = 20$.", true, "$\\frac{x}{4} = 5 \\Rightarrow x = 20$."));
  q.push(tf("medium", "The sum of three consecutive integers starting at $n$ is $3n + 3$.", true));
  q.push(tf("medium", "If the perimeter of a triangle with sides $x, x+2, x+4$ is 27, then $x = 9$.", false, "$3x + 6 = 27 \\Rightarrow x = 7$."));
  // fill in the blank
  q.push(num("medium", "Solve $4x - 7 = 21$. $x =$ ___.", 7, 0));
  q.push(num("medium", "Solve $\\frac{2x}{3} + 5 = 13$. $x =$ ___.", 12, 0));
  q.push(num("medium", "“Three times a number increased by 10 is 31” gives $3x + 10 = 31$, so $x =$ ___.", 7, 0));
  q.push(num("medium", "The sum of two consecutive odd integers is 28. The smaller is ___.", 13, 0));
  q.push(num("medium", "The perimeter of a square is 48 cm. Its side = ___ cm.", 12, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Solve $\\frac{x - 3}{2} - \\frac{x + 1}{3} = 2$.", ["$x = 23$", "$x = 17$", "$x = 15$", "$x = 21$"], 0, "$3(x-3) - 2(x+1) = 12 \\Rightarrow x - 11 = 12 \\Rightarrow x = 23$."));
  q.push(mc("hard", "The sum of three consecutive integers is 72. The largest is:", ["$23$", "$24$", "$25$", "$26$"], 2, "$3n + 3 = 72 \\Rightarrow n = 23$; largest $= 25$."));
  q.push(mc("hard", "A father is 4 times as old as his son. In 10 years he'll be twice as old. The son's age now is:", ["$5$", "$10$", "$15$", "$20$"], 0, "$4s + 10 = 2(s + 10) \\Rightarrow s = 5$."));
  q.push(mc("hard", "The perimeter of a triangle is 57 cm with sides $x$, $2x + 1$, $3x - 4$. The longest side is:", ["$17$ cm", "$20$ cm", "$23$ cm", "$26$ cm"], 3, "$6x - 3 = 57 \\Rightarrow x = 10$; longest $= 3(10) - 4 = 26$."));
  q.push(mc("hard", "The length of a rectangle is 3 cm less than twice the width; the perimeter is 54 cm. The width is:", ["$9$ cm", "$10$ cm", "$11$ cm", "$12$ cm"], 1, "$2(w + 2w - 3) = 54 \\Rightarrow 6w - 6 = 54 \\Rightarrow w = 10$."));
  // multiple select
  q.push(ms("hard", "Solve $\\frac{2x + 1}{3} - \\frac{x - 2}{2} = 1$. Which are correct?", ["$x = 10$", "$2(2x+1) - 3(x-2) = 6$", "$4x + 2 - 3x + 6 = 6$", "$x = -2$"], [1, 2, 3], "$x + 8 = 6 \\Rightarrow x = -2$."));
  q.push(ms("hard", "“Five years ago John was twice as old as Mary. Now John is 25; Mary is $m$.” Which work?", ["$25 - 5 = 2(m - 5)$", "$20 = 2m - 10$", "$2m - 10 = 20$", "$m = 15$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Two numbers are in ratio $3 : 5$, sum 64. Which are true?", ["$3x + 5x = 64$", "$x = 8$", "The numbers are 24 and 40", "Their difference is 16"], [0, 1, 2, 3]));
  q.push(ms("hard", "A rectangle's perimeter is 40 cm; length is 4 cm more than twice the width. Which give the width $w$?", ["$2(w + 2w + 4) = 40$", "$6w + 8 = 40$", "$3w + 4 = 20$", "$w = 6$"], [0, 1, 2], "$6w + 8 = 40 \\Rightarrow w = \\frac{16}{3}$, not 6."));
  q.push(ms("hard", "The sum of three consecutive even integers is 90; the smallest is $n$. Which are true?", ["$n + (n+2) + (n+4) = 90$", "$3n + 6 = 90$", "$n = 28$", "The numbers are 28, 30, 32"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "$\\frac{x + 1}{2} - \\frac{x - 2}{3} = 1$ has solution $x = 1$.", false, "$3(x+1) - 2(x-2) = 6 \\Rightarrow x + 7 = 6 \\Rightarrow x = -1$."));
  q.push(tf("hard", "If $3(x - 4) = 2(x + 1)$, then $x = 14$.", true, "$3x - 12 = 2x + 2 \\Rightarrow x = 14$."));
  q.push(tf("hard", "“A number is 4 more than another; their sum is 20” gives the numbers 8 and 12.", true));
  q.push(tf("hard", "The perimeter of a square is 4 times its side length.", true));
  q.push(tf("hard", "If $\\frac{2x - 3}{5} = \\frac{x + 1}{2}$, then $x = 11$.", false, "$4x - 6 = 5x + 5 \\Rightarrow x = -11$."));
  // fill in the blank
  q.push(num("hard", "Solve $\\frac{x}{2} - \\frac{x}{3} = 5$. $x =$ ___.", 30, 0));
  q.push(num("hard", "The sum of three consecutive odd integers is 75. The middle integer is ___.", 25, 0));
  q.push(num("hard", "A number decreased by 5 is twice the number. The number is ___.", -5, 0));
  q.push(num("hard", "The length of a rectangle is 3 more than twice the width; the perimeter is 42. The width = ___.", 6, 0));
  q.push(num("hard", "If $3(x - 2) = 2(x + 5)$, then $x =$ ___.", 16, 0));

  return q;
}

// ── 3.1 Coding Algebraic Concepts ────────────────────────────
// Pseudocode is written inline (no backticks/code blocks) because the bank
// renderer only typesets $...$ math; everything else shows as plain text.
export function gen31() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "A code sets y = x + 5. If x = 3, what is y?", ["$5$", "$8$", "$3$", "$15$"], 1));
  q.push(mc("easy", "A program computes result = 2 × n. If n = 7, result is:", ["$9$", "$14$", "$27$", "$7$"], 1));
  q.push(mc("easy", "A flowchart assigns a = 10, then b = a − 4. The value of b is:", ["$6$", "$10$", "$4$", "$14$"], 0));
  q.push(mc("easy", "Pseudocode: INPUT x; y = x × 3; OUTPUT y. If the input is 5, the output is:", ["$8$", "$15$", "$5$", "$3$"], 1));
  q.push(mc("easy", "A block sets total = 0, then total = total + 4. The final total is:", ["$0$", "$4$", "$8$", "$1$"], 1));
  // multiple select
  q.push(ms("easy", "Which outputs are correct for the rule y = 2x − 1?", ["If x = 3, y = 5", "If x = 4, y = 7", "If x = 5, y = 9", "If x = 6, y = 12"], [0, 1, 2]));
  q.push(ms("easy", "Which code expressions mean “add 3 to a number, then multiply by 2”?", ["(x + 3) × 2", "2 × (x + 3)", "2x + 6", "x × 2 + 3"], [0, 1, 2]));
  q.push(ms("easy", "Start with s = 0, then s = s + 2, s = s + 3, s = s + 1. Which equal the final s?", ["$6$", "$0 + 2 + 3 + 1$", "$5$", "$2 + 3 + 1$"], [0, 1, 3]));
  q.push(ms("easy", "Which snippets output 12 when x = 4?", ["y = x + 8", "y = 3 × x", "y = x^2 − 4", "y = 2 × x + 4"], [0, 1, 2, 3]));
  q.push(ms("easy", "A variable is updated: t = 10, t = t − 3, t = t + 5. Which are true?", ["Final t = 12", "t = 10 − 3 + 5", "t = 12 exactly", "t = 2"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "In code, x = 5 followed by x = x + 2 gives x = 7.", true));
  q.push(tf("easy", "Pseudocode OUTPUT 3 × 4 would display 12.", true));
  q.push(tf("easy", "The expression x + y in code adds the two variables.", true));
  q.push(tf("easy", "result = 10 ÷ 2 gives result = 5.", true));
  q.push(tf("easy", "In a flowchart, a diamond shape represents an assignment statement.", false, "A diamond is a decision/condition."));
  // fill in the blank
  q.push(num("easy", "In code, x = 4, y = x + 7. The value of y is ___.", 11, 0));
  q.push(num("easy", "Pseudocode: n = 6; m = n × 2 − 3. Then m = ___.", 9, 0));
  q.push(num("easy", "A loop runs 5 times and adds 2 each time, starting from 0. The final total = ___.", 10, 0));
  q.push(fill("easy", "The algebraic expression for the code y = (a + b) × 2 is ___.", ["2(a+b)", "2(a + b)"]));
  q.push(num("easy", "If p = 3 and q = 4, the code p × q − p evaluates to ___.", 9, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "A code uses y = 3x^2 − 2. If x = 4, y is:", ["$46$", "$22$", "$48$", "$10$"], 0, "$3(16) - 2 = 46$."));
  q.push(mc("medium", "Pseudocode: INPUT a, b; c = (a + b) ÷ 2; OUTPUT c. If a = 10, b = 20, output is:", ["$30$", "$15$", "$10$", "$20$"], 1));
  q.push(mc("medium", "total = 0; FOR i = 1 TO 3: total = total + i. The final total is:", ["$3$", "$6$", "$10$", "$1$"], 1, "$1 + 2 + 3 = 6$."));
  q.push(mc("medium", "A function f(x) = 2x + 1 is coded. f(5) returns:", ["$11$", "$10$", "$12$", "$6$"], 0));
  q.push(mc("medium", "A program computes area = length × width. If length = 3x and width = 2x, the area is:", ["$6x$", "$6x^2$", "$5x^2$", "$x^2$"], 1));
  // multiple select
  q.push(ms("medium", "Which snippets output 20 when x = 5?", ["y = x × 4", "y = x^2 − 5", "y = 3x + 5", "y = 2x + 10"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which correctly compute the average of three numbers a, b, c?", ["(a + b + c) ÷ 3", "a + b + c ÷ 3", "sum ÷ 3 where sum = a + b + c", "(a + b + c) × \\frac{1}{3}"], [0, 2, 3]));
  q.push(ms("medium", "x = 2, then x = x^2, then x = x + 3, then x = x ÷ 7. Which equal the final x?", ["$1$", "$(4 + 3) \\div 7$", "$7$", "$\\frac{7}{7}$"], [0, 1, 3]));
  q.push(ms("medium", "INPUT n; a = n + 2; b = a × 3; OUTPUT b. Which are valid expressions for the output?", ["3(n + 2)", "3n + 6", "3a", "n + 6"], [0, 1, 2]));
  q.push(ms("medium", "A loop runs k times and adds 5 each time, starting from 0. Which equal the final value?", ["$5k$", "$k \\times 5$", "$5$ added $k$ times", "$5 + k$"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "In coding, “=” means “is equal to” as in mathematics.", false, "In most languages “=” is assignment, not equality."));
  q.push(tf("medium", "A flowchart rectangle is used for calculations/assignments.", true));
  q.push(tf("medium", "Pseudocode IF x > 5 THEN y = 10 is a conditional statement.", true));
  q.push(tf("medium", "The code x = x + 1 is mathematically impossible.", false, "It is an assignment, not an equation."));
  q.push(tf("medium", "A loop can represent repeated addition in algebra.", true));
  // fill in the blank
  q.push(num("medium", "Code: a = 3; b = a^2 − 4; c = b + 2 × a. Then c = ___.", 11, 0));
  q.push(num("medium", "Pseudocode result = 2 × n + 3. If n = 7, result = ___.", 17, 0));
  q.push(num("medium", "A loop runs 5 times, each time adding 3n to a total starting at 0. If n = 2, total = ___.", 30, 0));
  q.push(fill("medium", "The algebraic expression for the code p = q × q − 2q + 1 is ___.", ["q^2-2q+1", "q^2 - 2q + 1"]));
  q.push(num("medium", "If x = 2, y = 3, the code z = (x + y)^2 − x × y gives z = ___.", 19, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A code computes y = (2x^2 − 3x + 1) ÷ (x − 1). For x = 3, y is:", ["$5$", "$8$", "$10$", "$2$"], 0, "$(18 - 9 + 1) \\div 2 = 10 \\div 2 = 5$."));
  q.push(mc("hard", "Pseudocode: INPUT x; IF x > 0 THEN y = x^2 ELSE y = −x; OUTPUT y. If x = −3, output is:", ["$9$", "$3$", "$-9$", "$-3$"], 1, "$-3 \\le 0$, so $y = -(-3) = 3$."));
  q.push(mc("hard", "A function: result = 1; FOR i = 1 TO n: result = result × i. This calculates:", ["$n^2$", "$n!$ (factorial)", "$2^n$", "$\\frac{n(n+1)}{2}$"], 1));
  q.push(mc("hard", "Code: x = 2; y = 3; x = x + y; y = x − y; x = x − y. The final values are:", ["x = 2, y = 3", "x = 3, y = 2", "x = 5, y = 2", "x = 5, y = 3"], 1, "This is the swap algorithm."));
  q.push(mc("hard", "A recursive function: f(0) = 1; f(n) = n × f(n−1) for n > 0. This calculates:", ["Sum of first n numbers", "$n!$ (factorial)", "$n^2$", "$2^n$"], 1));
  // multiple select
  q.push(ms("hard", "Which snippets correctly model $3x^2 + 2x - 5$?", ["y = 3 × x^2 + 2 × x − 5", "y = x × (3x + 2) − 5", "y = 3 × x × x + 2 × x − 5", "y = 3x + 2 − 5"], [0, 1, 2], "D is missing the squared term."));
  q.push(ms("hard", "Which correctly code the sum of the first n natural numbers, $\\frac{n(n+1)}{2}$?", ["(n × (n + 1)) ÷ 2", "n × (n + 1) ÷ 2", "(n^2 + n) ÷ 2", "n × (n + 1) × 0.5"], [0, 1, 2, 3]));
  q.push(ms("hard", "x = 10; x = x − 2; x = x × 3; x = x ÷ 4. Which equal the final x?", ["$6$", "$(10 - 2) \\times 3 \\div 4$", "$24 \\div 4$", "$8 \\times 3 \\div 4$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Code: a = 5; b = a + 3; c = 2 × b − a. Which statements are true?", ["b = 8", "c = 11", "c = 2(8) − 5", "c = 16"], [0, 1, 2]));
  q.push(ms("hard", "Fibonacci-like loop: a = 0, b = 1; FOR i = 1 TO 3: c = a + b; a = b; b = c. After the loop:", ["a = 2, b = 3, c = 3", "a = 3, b = 5", "a = 2, b = 3", "c = 5"], [0, 2], "Steps: (1,1),(1,2),(2,3) → a=2, b=3, c=3."));
  // true / false
  q.push(tf("hard", "The code x = 5; y = x; x = 10 results in y = 5.", true));
  q.push(tf("hard", "A counting loop FOR i = 1 TO n with total = total + i represents a summation from 1 to n.", true));
  q.push(tf("hard", "Chained assignment a = b = c is valid in many languages (e.g. Python, Java, C).", true));
  q.push(tf("hard", "A flowchart oval represents the start or end of a program.", true));
  q.push(tf("hard", "The code y = x^(2) + 1 is equivalent to $x^2 + 1$.", true));
  // fill in the blank
  q.push(num("hard", "Code: p = 2; q = 3; r = p^q − q^p. Then r = ___.", -1, 0, "$2^3 - 3^2 = 8 - 9 = -1$."));
  q.push(num("hard", "f(x) = a x^2 + b x + c coded as y = a×x×x + b×x + c with a = 1, b = −3, c = 2. Then f(2) = ___.", 0, 0));
  q.push(num("hard", "A loop adds 2i + 1 to a total for i = 0 to n−1. If n = 3, total = ___.", 9, 0, "$1 + 3 + 5 = 9$."));
  q.push(fill("hard", "The code result = (x + y)^2 − (x − y)^2 simplifies algebraically to ___.", ["4xy"]));
  q.push(num("hard", "If x = 7, y = 3, the code z = (x ÷÷ y) × y + (x mod y) [floor-div and modulo] gives z = ___.", 7, 0));

  return q;
}

// ── 3.2 Building Code from Steps ─────────────────────────────
export function gen32() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Steps: “Start with a number. Add 5. Multiply by 2.” Which code matches?", ["result = x × 2 + 5", "result = (x + 5) × 2", "result = x + 5 × 2", "result = x × (5 + 2)"], 1));
  q.push(mc("easy", "Steps: “Input a number. Square it. Subtract 3.” The expression is:", ["$x^2 - 3$", "$(x - 3)^2$", "$x^2 + 3$", "$3 - x^2$"], 0));
  q.push(mc("easy", "Steps: “Start with 0. Add 2. Add 3. Add 1.” The final value is:", ["$0$", "$6$", "$5$", "$2$"], 1));
  q.push(mc("easy", "Steps to find the average of two numbers $a$ and $b$:", ["(a + b) ÷ 2", "a + b ÷ 2", "(a ÷ 2) + b", "a + b × 2"], 0));
  q.push(mc("easy", "“Start with $x$. If $x > 0$, double it; otherwise make it zero.” Which matches?", ["if x > 0: x = 2x  else: x = 0", "x = 2x if x > 0", "if x < 0: x = 0", "x = x × 2"], 0));
  // multiple select
  q.push(ms("easy", "Steps: “Take a number. Add 3. Multiply by 4.” Which expressions match?", ["$(x + 3) \\times 4$", "$4(x + 3)$", "$4x + 12$", "$4x + 3$"], [0, 1, 2]));
  q.push(ms("easy", "Which implement “subtract 5 from a number, then divide by 2”?", ["(x − 5) ÷ 2", "x − 5 ÷ 2", "(x − 5) / 2", "x ÷ 2 − 5"], [0, 2]));
  q.push(ms("easy", "Program: total = 0; total = total + 4; total = total + 6; total = total ÷ 2. Which equal the final total?", ["$5$", "$(0 + 4 + 6) \\div 2$", "$10$", "$\\frac{10}{2}$"], [0, 1, 3]));
  q.push(ms("easy", "Which sets of steps produce $y = 2x - 1$?", ["Double x, subtract 1", "Subtract 1 from x, then double", "Multiply x by 2, then subtract 1", "$2 \\times x - 1$"], [0, 2, 3]));
  q.push(ms("easy", "Steps: “Start with $n$. Add 2. Multiply by 3. Subtract 6.” Which are equivalent?", ["$3(n + 2) - 6$", "$3n + 6 - 6$", "$3n$", "$3n + 0$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("easy", "“Start with $x$. Double it. Add 5” gives $2x + 5$.", true));
  q.push(tf("easy", "The code for “square a number then add 1” is x^2 + 1.", true));
  q.push(tf("easy", "“Subtract 2 from a number, then multiply by 3” is $x - 2 \\times 3$.", false, "It is $(x - 2) \\times 3$."));
  q.push(tf("easy", "“Start at 0, add 3 three times” gives 9.", true));
  q.push(tf("easy", "A flowchart diamond represents an assignment.", false, "A diamond is a decision."));
  // fill in the blank
  q.push(fill("easy", "Steps: “Start with $x$. Multiply by 4. Subtract 7.” Expression = ___.", ["4x-7", "4x - 7"]));
  q.push(num("easy", "Code: y = 0; y = y + 5; y = y × 2. Final y = ___.", 10, 0));
  q.push(fill("easy", "“Add 10 to a number, then divide by 2” in code is ___.", ["(x+10)/2", "(x + 10)/2", "(x+10)÷2"]));
  q.push(fill("easy", "The formula from “cube the number, then subtract 1” is ___.", ["x^3-1", "x^3 - 1"]));
  q.push(num("easy", "A program sets count = 0, then count = count + 1 four times. Final count = ___.", 4, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Steps: “Input $n$. If even, divide by 2; if odd, multiply by 3 and add 1.” This is the:", ["Fibonacci sequence", "Collatz conjecture", "Prime test", "Factorial"], 1));
  q.push(mc("medium", "total = 0; FOR i = 1 TO n: total = total + i. The algebraic equivalent is:", ["$\\frac{n(n+1)}{2}$", "$n^2$", "$2n$", "$n(n-1)$"], 0));
  q.push(mc("medium", "Steps: “Set c = a; set a = b; set b = c.” This code:", ["Adds a and b", "Swaps a and b", "Doubles a and b", "Multiplies a and b"], 1));
  q.push(mc("medium", "A program does “multiply by 9/5, then add 32.” This converts:", ["Fahrenheit to Celsius", "Celsius to Fahrenheit", "Kelvin to Celsius", "Celsius to Kelvin"], 1));
  q.push(mc("medium", "area = (2x + 3)(x − 1) simplifies to:", ["$2x^2 + x - 3$", "$2x^2 - x - 3$", "$2x^2 + 5x - 3$", "$2x^2 - 5x - 3$"], 0, "$2x^2 - 2x + 3x - 3 = 2x^2 + x - 3$."));
  // multiple select
  q.push(ms("medium", "Steps: “Take a number. Add 7. Multiply by 2. Subtract 14.” Which are equivalent?", ["$2(x + 7) - 14$", "$2x + 14 - 14$", "$2x$", "$2x + 0$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Perimeter code P = 2 × (L + W). Which steps match?", ["Add length and width, then double", "Double length, double width, then add", "$2L + 2W$", "$L + W + L + W$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Steps: “If $n > 10$, set $n = n - 3$; otherwise $n = n + 2$.” For $n = 12$, which equal the final $n$?", ["$9$", "$14$", "$12 - 3$", "$15 - 6$"], [0, 2, 3]));
  q.push(ms("medium", "Which pseudocode correctly compute $|x|$ (absolute value)?", ["IF x < 0 THEN x = −x", "IF x ≥ 0 THEN x = x ELSE x = −x", "x = |x|", "IF x < 0 THEN x = 0 − x"], [0, 1, 2, 3]));
  q.push(ms("medium", "A loop runs for i = 1 to 5: total = total + 2i (start 0). Which equal the final total?", ["$2(1+2+3+4+5)$", "$30$", "$2 \\times 15$", "$2 + 4 + 6 + 8 + 10$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "“Add 5, then multiply by 3” gives the same result as “multiply by 3, then add 5”.", false, "$3(x+5) \\neq 3x+5$."));
  q.push(tf("medium", "A loop that runs $n$ times adding 2 each time gives final value $2n$.", true));
  q.push(tf("medium", "The code IF x > 0 THEN y = 1 ELSE y = −1 gives the sign of x (for $x \\neq 0$).", true));
  q.push(tf("medium", "“Set b = a; set a = a + b” doubles $a$.", true, "$a = a + a = 2a$."));
  q.push(tf("medium", "A flowchart parallelogram represents input/output.", true));
  // fill in the blank
  q.push(fill("medium", "Steps: “Double a number. Add 6. Divide by 2.” Simplifies to ___.", ["x+3", "x + 3"]));
  q.push(num("medium", "Code: x = 5; y = 2x + 3; x = y − x. Final x = ___.", 8, 0));
  q.push(fill("medium", "The sum of the first $n$ odd numbers is ___ (in terms of n).", ["n^2"]));
  q.push(fill("medium", "Code d = rate × time with rate = 2x + 1, time = x − 3 simplifies to ___.", ["2x^2-5x-3", "2x^2 - 5x - 3"]));
  q.push(num("medium", "Steps: “Start with 0. Add 5. If > 10 subtract 3, otherwise add 2.” Final = ___.", 7, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Recursive code: f(0) = 1; f(n) = n × f(n−1). This calculates:", ["Sum of first n numbers", "$n!$ (factorial)", "$2^n$", "$n^2$"], 1));
  q.push(mc("hard", "Steps: “x = x + y; y = x − y; x = x − y.” If x = 7, y = 3, the final values are:", ["x = 7, y = 3", "x = 3, y = 7", "x = 10, y = 7", "x = 7, y = 10"], 1, "Swap algorithm."));
  q.push(mc("hard", "a = 0, b = 1; FOR i = 1 TO n−1: c = a + b; a = b; b = c; OUTPUT b. For n = 6, output is:", ["$5$", "$8$", "$13$", "$21$"], 1, "Fibonacci: 0,1,1,2,3,5,8 → 8."));
  q.push(mc("hard", "“Multiply by 3. Add 7. Multiply by 2. Subtract 14. Divide by 6.” The net effect is:", ["$x + 1$", "$x$", "$x - 1$", "$2x$"], 1, "$(3x+7)\\times2 - 14 = 6x$; $\\div 6 = x$."));
  q.push(mc("hard", "Code: discriminant = b^2 − 4ac; root = (−b ± √discriminant) ÷ (2a). This implements the:", ["Quadratic formula", "Pythagorean theorem", "Distance formula", "Slope formula"], 0));
  // multiple select
  q.push(ms("hard", "Which implement “multiply a number by 3, add 2, then square the result”?", ["(3x + 2)^2", "(3x + 2)(3x + 2)", "$(3x + 2)^2$", "$9x^2 + 12x + 4$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Code h = √(a^2 + b^2). Which describe it?", ["Pythagorean theorem", "Distance from the origin", "$c = \\sqrt{a^2 + b^2}$", "Hypotenuse of a right triangle"], [0, 1, 2, 3]));
  q.push(mc("hard", "Steps: “If $n$ divisible by 3, divide by 3; then if the result is divisible by 5, multiply by 2; otherwise add 1.” For $n = 15$, final $n$ =", ["$10$", "$5$", "$16$", "$6$"], 0, "$15 \\div 3 = 5$, then $5 \\times 2 = 10$."));
  q.push(ms("hard", "Which produce $y = \\frac{x^2 - 1}{x - 1}$ (for $x \\neq 1$)?", ["Square x, subtract 1, divide by (x − 1)", "$(x^2 - 1) \\div (x - 1)$", "$x + 1$ (after simplifying)", "$x^2 - 1$, then divide by $x - 1$"], [0, 1, 2, 3]));
  q.push(ms("hard", "total = 0; FOR i = 1 TO n: total = total + i^2. For n = 3, which equal the final total?", ["$1^2 + 2^2 + 3^2$", "$14$", "$1 + 4 + 9$", "$\\frac{3 \\cdot 4 \\cdot 7}{6}$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "The code x = x + 1 increments x by 1.", true));
  q.push(tf("hard", "A WHILE loop repeats while its condition is true and stops when it becomes false.", true));
  q.push(tf("hard", "Steps: “Multiply by 2. Add 3. Multiply by 2.” simplifies to $4x + 6$.", true, "$2(2x+3) = 4x + 6$."));
  q.push(tf("hard", "The Collatz conjecture claims the sequence always reaches 1, though this is unproven.", true));
  q.push(tf("hard", "Every function in code must return a value.", false, "Void functions/procedures return nothing."));
  // fill in the blank
  q.push(fill("hard", "Steps: “Start with $x$. Add 1. Divide by 2. Multiply by 4. Subtract 2.” Simplified = ___.", ["2x"]));
  q.push(num("hard", "Code: a = 2; b = 3; a = a × b; b = a ÷ b; a = a ÷ b. Final a = ___ (b becomes 2).", 3, 0));
  q.push(num("hard", "A loop runs n times: total = total + (2i − 1). For n = 4, total = ___.", 16, 0, "$1 + 3 + 5 + 7 = 16$."));
  q.push(num("hard", "Distance between $(1,2)$ and $(4,6)$: $\\sqrt{(4-1)^2 + (6-2)^2} = $ ___.", 5, 0));
  q.push(num("hard", "Steps: “Square $n$. If $> 100$ subtract 10, otherwise add 5.” For $n = 8$, final = ___.", 69, 0, "$64 + 5 = 69$."));

  return q;
}

// ── 3.3 Reading, Predicting & Altering Code ──────────────────
export function gen33() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Output of: x = 5; y = x + 3; OUTPUT y.", ["$3$", "$5$", "$8$", "$15$"], 2));
  q.push(mc("easy", "Output of: a = 10; b = a − 4; OUTPUT b.", ["$4$", "$6$", "$10$", "$14$"], 1));
  q.push(mc("easy", "Trace: total = 0; total = total + 2; total = total + 3; OUTPUT total.", ["$0$", "$2$", "$3$", "$5$"], 3));
  q.push(mc("easy", "Final value of x: x = 4; x = x × 2; x = x − 3.", ["$1$", "$5$", "$8$", "$11$"], 1));
  q.push(mc("easy", "Predict: n = 3; result = n^2 + 2n; OUTPUT result.", ["$9$", "$15$", "$12$", "$6$"], 1, "$9 + 6 = 15$."));
  // multiple select
  q.push(ms("easy", "p = 6; q = p ÷ 2; r = q + 5; OUTPUT r. Which equal the output?", ["$8$", "$3 + 5$", "$6 \\div 2 + 5$", "$11$"], [0, 1, 2]));
  q.push(ms("easy", "Code x = 5; y = x + 3; OUTPUT y is altered to output 12. Which changes work?", ["Change x = 5 to x = 9", "Change y = x + 3 to y = x + 7", "Change y = x + 3 to y = 2x + 2", "Change OUTPUT y to OUTPUT x + 7"], [0, 1, 2, 3]));
  q.push(ms("easy", "a = 2; b = 3; c = a × b; a = c − b; OUTPUT a. Which equal the output?", ["$3$", "$6 - 3$", "$2$", "$9 - 6$"], [0, 1, 3]));
  q.push(ms("easy", "m = 10; IF m > 5 THEN m = m − 3 ELSE m = m + 5. Which is the final m?", ["$7$", "$10$", "$15$", "$13$"], [0]));
  q.push(ms("easy", "count = 0; FOR i = 1 TO 3: count = count + i; OUTPUT count. Which equal the output?", ["$6$", "$1 + 2 + 3$", "$10$", "$0 + 1 + 2 + 3$"], [0, 1, 3]));
  // true / false
  q.push(tf("easy", "x = 3; y = x + 2; OUTPUT y displays 5.", true));
  q.push(tf("easy", "total = 0; total = total + 4; total = total + 6 gives total = 10.", true));
  q.push(tf("easy", "The output of OUTPUT 5 × 2 + 3 is 13.", true));
  q.push(tf("easy", "Changing x = 2 to x = 4 in y = x × 3 changes y from 6 to 12.", true));
  q.push(tf("easy", "A FOR loop always runs exactly 10 times.", false));
  // fill in the blank
  q.push(num("easy", "a = 7; b = a − 3; OUTPUT b. Then b = ___.", 4, 0));
  q.push(num("easy", "total = 0; total = total + 5; total = total × 2. Then total = ___.", 10, 0));
  q.push(num("easy", "If x = 4, then y = x^2 − 2 gives y = ___.", 14, 0));
  q.push(num("easy", "The output of OUTPUT (6 + 4) ÷ 2 is ___.", 5, 0));
  q.push(num("easy", "z = 8; z = z ÷ 2; z = z + 3. Then z = ___.", 7, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "x = 5; y = 10; IF x < y THEN x = x + 3 ELSE y = y − 2; OUTPUT x, y.", ["5, 10", "8, 10", "5, 8", "8, 8"], 1));
  q.push(mc("medium", "sum = 0; FOR i = 1 TO 4: sum = sum + 2i; OUTPUT sum.", ["$10$", "$20$", "$15$", "$12$"], 1, "$2+4+6+8 = 20$."));
  q.push(mc("medium", "n = 6; WHILE n > 0: OUTPUT n; n = n − 2. The outputs are:", ["6, 4, 2, 0", "6, 4, 2", "6, 5, 4, 3, 2, 1", "4, 2, 0"], 1));
  q.push(mc("medium", "Which change makes x = 3; y = x + 5; OUTPUT y display 10?", ["Change x = 3 to x = 5", "Change y = x + 5 to y = 2x + 4", "Change y = x + 5 to y = x × 2 + 4", "All of the above"], 3));
  q.push(mc("medium", "INPUT a, b; c = a; a = b; b = c; OUTPUT a, b. This code:", ["Adds a and b", "Swaps a and b", "Multiplies a and b", "Finds the average"], 1));
  // multiple select
  q.push(ms("medium", "score grading: A if ≥80, B if ≥60, else C. For score = 75, the output is:", ["“B”", "“C”", "“A”", "the second branch"], [0, 3]));
  q.push(ms("medium", "x = 4; y = x^2 + x; OUTPUT y currently shows 20. Which single change makes it output 30?", ["Change x = 4 to x = 5", "Change y = x^2 + x to y = x^2 + 2x", "Change y = x^2 + x to y = 2x^2 − 2", "Change OUTPUT y to OUTPUT x^2 + 14"], [0, 2, 3], "$x=5: 30$; $2x^2-2 = 30$; $16+14 = 30$. ($x^2+2x = 24$.)"));
  q.push(ms("medium", "a = 2; b = 3; a = a + b; b = a − b; a = a − b. Which are true?", ["Final a = 3", "Final b = 2", "The values are swapped", "Final a = 2, b = 3"], [0, 1, 2]));
  q.push(ms("medium", "x = 10; WHILE x > 0: OUTPUT x; x = x − 1  — but END WHILE is missing. Which fixes give correct output?", ["Add END WHILE", "Change condition to x ≥ 0", "Remove the loop entirely", "Add END WHILE and keep the condition"], [0, 3]));
  q.push(ms("medium", "total = 0; FOR i = 5 TO 1 STEP −1: total = total + i; OUTPUT total. Which equal the output?", ["$15$", "$5 + 4 + 3 + 2 + 1$", "$\\frac{5 \\cdot 6}{2}$", "$10$"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "x = 5; x = x + 1; OUTPUT x displays 6.", true));
  q.push(tf("medium", "Changing FOR i = 1 TO 5 to FOR i = 1 TO 3 changes the number of iterations.", true));
  q.push(tf("medium", "In a WHILE loop, if the condition is false initially, the loop runs once.", false, "It runs zero times."));
  q.push(tf("medium", "The output of OUTPUT 10 // 3 is 3 (integer division).", true));
  q.push(tf("medium", "IF x > 5 and IF x ≥ 6 are equivalent for integer x.", true));
  // fill in the blank
  q.push(num("medium", "result = 1; FOR i = 1 TO 4: result = result × i. Then result = ___.", 24, 0));
  q.push(fill("medium", "n = 10; WHILE n ≥ 5: OUTPUT n; n = n − 2. The outputs are ___.", ["10, 8, 6", "10,8,6"]));
  q.push(num("medium", "If x = 7, y = 3: IF x > y THEN OUTPUT x − y ELSE OUTPUT y − x. Output = ___.", 4, 0));
  q.push(num("medium", "Change x = 3 to x = 8 in y = 2x + 4. New y = ___.", 20, 0));
  q.push(num("medium", "The sum of all even numbers from 2 to 10 in a loop is ___.", 30, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(ms("hard", "Recursive: f(1) = 1; f(n) = n + f(n−1). Which equal f(4)?", ["$10$", "$4 + 3 + 2 + 1$", "$24$", "$\\frac{4 \\cdot 5}{2}$"], [0, 1, 3], "$4+3+2+1 = 10$."));
  q.push(mc("hard", "x = 5; y = 0; WHILE x > 0: y = y + x; x = x − 1; OUTPUT y.", ["$10$", "$15$", "$5$", "$0$"], 1, "$5+4+3+2+1 = 15$."));
  q.push(mc("hard", "a = 1; b = 2; c = 3; a = b; b = c; c = a + b; OUTPUT c.", ["$3$", "$5$", "$2$", "$4$"], 1, "$a=2, b=3, c=5$."));
  q.push(mc("hard", "x = 10; WHILE x > 1: IF x even THEN x = x ÷ 2 ELSE x = 3x + 1. What alteration makes it output 1?", ["Change condition to x > 0", "Remove the ELSE branch", "Change ÷ to ×", "No change needed; it already reaches 1"], 3, "Collatz reaches 1."));
  q.push(mc("hard", "a = 0; b = 1; FOR i = 1 TO n: c = a + b; a = b; b = c; OUTPUT a. For n = 5, output is:", ["$5$", "$8$", "$3$", "$13$"], 0, "After 5 iterations a = 5."));
  // multiple select
  q.push(ms("hard", "total = 0; FOR i = 1 TO 5: total = total + i (currently 15). Which alterations make it output 30?", ["Change total + i to total + 2i", "Change OUTPUT total to OUTPUT total × 2", "Change TO 5 to TO 6", "Change total + i to total + i + 3"], [0, 1, 3], "C (TO 6) gives 21."));
  q.push(ms("hard", "x = 10; y = 5; WHILE x > y: x = x − 2; y = y + 1; OUTPUT x, y. Which equal the final (x, y)?", ["6, 7", "4, 10", "8, 6", "6, 8"], [0], "Steps: (8,6),(6,7); 6 > 7 false → x = 6, y = 7."));
  q.push(ms("hard", "def mystery(n): if n ≤ 1 return n; else return mystery(n−1) + mystery(n−2). Which are true?", ["It calculates Fibonacci numbers", "mystery(6) = 8", "mystery(4) = 3", "It calculates factorials"], [0, 1, 2]));
  q.push(ms("hard", "n = 5; WHILE n ≠ 0: OUTPUT n; n = n − 1 (END WHILE missing). Which fixes work?", ["Add END WHILE", "Change n ≠ 0 to n > 0", "Change n = n − 1 to n = n − 0", "Add a break condition inside"], [0, 1, 3]));
  q.push(ms("hard", "for i in range(1, 6): if i % 2 == 0: print(i). Which is the output?", ["2 4", "2 4 6", "1 3 5", "even numbers below 5"], [0, 3]));
  // true / false
  q.push(tf("hard", "x = 5; x = x + 1; OUTPUT x outputs 6.", true));
  q.push(tf("hard", "Changing FOR i = 1 TO 10 to FOR i = 2 TO 10 reduces the iterations by 1.", true));
  q.push(tf("hard", "WHILE x < 10 runs forever if x is never increased inside it.", true));
  q.push(tf("hard", "OUTPUT 10 % 3 displays 1 (the remainder).", true));
  q.push(tf("hard", "A recursive function must have a base case to avoid infinite recursion.", true));
  // fill in the blank
  q.push(num("hard", "a = 2; b = 3; c = 4; a = b + c; b = a − c; c = a − b; OUTPUT c. Then c = ___.", 4, 0));
  q.push(num("hard", "Collatz: n = 6; WHILE n > 1: if even n = n/2 else n = 3n+1; OUTPUT n. Then n = ___.", 1, 0));
  q.push(num("hard", "total = 0; FOR i = 1 TO n: total = total + i × i. For n = 4, total = ___.", 30, 0, "$1+4+9+16 = 30$."));
  q.push(num("hard", "Alter x = 2 to x = 5 in y = x^3 − x. New y = ___.", 120, 0));
  q.push(num("hard", "The sum of all odd numbers from 1 to 9 in a loop is ___.", 25, 0));

  return q;
}

// ── 4.1 Linear vs Non-Linear Relations ───────────────────────
export function gen41() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Which equation represents a linear relation?", ["$y = 2x + 3$", "$y = x^2 + 1$", "$y = \\frac{3}{x}$", "$y = 2^x$"], 0));
  q.push(mc("easy", "Which table shows a linear relation?", ["$x: 1,2,3;\\ y: 2,4,6$", "$x: 1,2,3;\\ y: 2,4,8$", "$x: 1,2,3;\\ y: 2,5,10$", "$x: 1,2,3;\\ y: 2,3,5$"], 0));
  q.push(mc("easy", "The graph of a linear relation is always:", ["A curve", "A straight line", "A circle", "A parabola"], 1));
  q.push(mc("easy", "Which relation is non-linear?", ["$y = 5x - 2$", "$y = -3x + 7$", "$y = x^2 + 4$", "$y = \\frac{x}{2} + 1$"], 2));
  q.push(mc("easy", "A car travels at constant speed. Distance vs time is:", ["Non-linear", "Linear", "Exponential", "Quadratic"], 1));
  // multiple select
  q.push(ms("easy", "Which are linear equations?", ["$y = 4x - 1$", "$y = x^2 + 3$", "$y = -2x + 5$", "$y = \\frac{x}{3} + 2$"], [0, 2, 3]));
  q.push(ms("easy", "Which tables represent linear relations?", ["$x: 0,1,2;\\ y: 3,5,7$", "$x: 0,1,2;\\ y: 1,2,4$", "$x: 0,1,2;\\ y: 10,7,4$", "$x: 0,1,2;\\ y: 2,4,8$"], [0, 2]));
  q.push(ms("easy", "Which characteristics describe a non-linear relation?", ["Constant rate of change", "Variable rate of change", "Graph is a straight line", "Graph is a curve"], [1, 3]));
  q.push(ms("easy", "Which real-world situations are linear?", ["Area of a square vs side length", "Cost of apples at $\\textdollar 2$/kg vs kg", "Distance at constant speed vs time", "Population doubling each year"], [1, 2]));
  q.push(ms("easy", "Which equations are non-linear?", ["$y = 2^x$", "$y = 3x + 1$", "$y = x^2 - 4$", "$y = \\frac{1}{x}$"], [0, 2, 3]));
  // true / false
  q.push(tf("easy", "$y = 5x + 2$ is linear.", true));
  q.push(tf("easy", "$y = x^3$ is linear.", false));
  q.push(tf("easy", "A straight-line graph always represents a linear relation.", true));
  q.push(tf("easy", "The rate of change in a linear relation is constant.", true));
  q.push(tf("easy", "$y = \\frac{2}{x}$ is a linear relation.", false));
  // fill in the blank
  q.push(fill("easy", "The graph of $y = 2x + 3$ is a ___.", ["straight line", "line", "a straight line"]));
  q.push(fill("easy", "$y = x^2$ is an example of a ___ relation.", ["non-linear", "nonlinear", "non linear"]));
  q.push(fill("easy", "In a linear relation, the rate of change is ___.", ["constant"]));
  q.push(num("easy", "The equation $y = -4x + 7$ has slope ___.", -4, 0));
  q.push(fill("easy", "A relation where $y$ changes by 3 for every 1 change in $x$ is ___.", ["linear"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Which relation is linear?", ["$y = 3x^2 - 2$", "$y = \\frac{x}{2} + 5$", "$y = 2^x - 1$", "$y = \\frac{3}{x}$"], 1));
  q.push(mc("medium", "A table shows $x: 1,2,3,4$ and $y: 3,6,12,24$. This relation is:", ["Linear", "Non-linear (exponential)", "Linear with slope 3", "Constant"], 1));
  q.push(mc("medium", "Which equation represents a non-linear relation?", ["$y = \\frac{2x - 1}{3}$", "$y = 5 - 2x$", "$y = \\sqrt{x} + 1$", "$y = 0.5x + 4$"], 2));
  q.push(mc("medium", "A car accelerates uniformly from rest. Distance vs time is:", ["Linear", "Non-linear (quadratic)", "Constant", "Zero"], 1, "Distance $= \\frac{1}{2}at^2$, a quadratic (non-linear) relation."));
  q.push(mc("medium", "Which graph shows a linear relation?", ["Parabola", "Hyperbola", "Straight line with negative slope", "Exponential curve"], 2));
  // multiple select
  q.push(ms("medium", "Which are non-linear relations?", ["$y = 4x - 7$", "$y = x^2 + 3x + 1$", "$y = |x|$", "$y = \\frac{1}{x}$"], [1, 2, 3]));
  q.push(ms("medium", "A relation has constant second differences. This means it is:", ["Linear", "Quadratic", "Non-linear", "Exponential"], [1, 2]));
  q.push(ms("medium", "Which tables show non-linear relations?", ["$x: 0,1,2,3;\\ y: 1,3,5,7$", "$x: 0,1,2,3;\\ y: 1,2,4,8$", "$x: 0,1,2,3;\\ y: 2,5,10,17$", "$x: 0,1,2,3;\\ y: 10,8,6,4$"], [1, 2]));
  q.push(ms("medium", "Which statements about linear relations are true?", ["They have constant first differences", "They have a constant slope", "They can be written as $y = mx + b$", "They always pass through the origin"], [0, 1, 2]));
  q.push(ms("medium", "Which real-world relations are non-linear?", ["Area of a circle vs radius", "Perimeter of a square vs side", "Volume of a cube vs side", "Distance at constant speed vs time"], [0, 2]));
  // true / false
  q.push(tf("medium", "$y = 0x + 5$ is a linear relation.", true));
  q.push(tf("medium", "A quadratic relation is a type of linear relation.", false));
  q.push(tf("medium", "The graph of $y = \\frac{1}{x}$ is a straight line.", false));
  q.push(tf("medium", "Constant first differences indicate a linear relation.", true));
  q.push(tf("medium", "A relation where $y$ changes by $2, 4, 6$ for equal $x$ increments is linear.", false, "The rate of change is not constant, so it is non-linear."));
  // fill in the blank
  q.push(num("medium", "The slope of $y = 3x - 5$ is ___.", 3, 0));
  q.push(fill("medium", "A relation with equation $y = x^2 - 4$ is ___.", ["non-linear", "nonlinear", "non linear"]));
  q.push(fill("medium", "In a linear relation, first differences are ___.", ["constant"]));
  q.push(fill("medium", "The graph of $y = \\frac{2}{3}x + 1$ is a ___.", ["straight line", "line", "a straight line"]));
  q.push(fill("medium", "A relation that doubles each time $x$ increases by 1 is ___ (non-linear).", ["exponential"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Which relation is linear?", ["$y = \\frac{2x + 3}{x}$", "$y = \\sqrt{4x^2}$", "$y = 2(x - 3) + 4$", "$y = |2x - 1|$"], 2, "$2(x-3)+4 = 2x - 2$ is linear; the others are non-linear."));
  q.push(mc("hard", "A table has first differences $3, 5, 7, 9$. The relation is:", ["Linear", "Quadratic (non-linear)", "Exponential", "Constant"], 1, "Second differences are constant ($2$), so it is quadratic."));
  q.push(mc("hard", "Which represents a non-linear relation that is NOT quadratic?", ["$y = x^2 + 3$", "$y = 2^x$", "$y = \\frac{x}{2} + 1$", "$y = 4x - 7$"], 1));
  q.push(mc("hard", "A car's fuel consumption is 5 L per 100 km. Fuel used vs distance is:", ["Linear", "Non-linear", "Quadratic", "Exponential"], 0, "Constant rate, so linear."));
  q.push(mc("hard", "The area of a square is $A = s^2$. This relation is:", ["Linear", "Non-linear (quadratic)", "Exponential", "Constant"], 1));
  // multiple select
  q.push(ms("hard", "Which relations are linear for all real $x$?", ["$y = \\frac{x}{2} + 3$", "$y = x^2 - x$", "$y = 2x + 1$", "$y = 3$"], [0, 2, 3]));
  q.push(ms("hard", "Which tables represent non-linear relations?", ["$x: 1,2,3,4;\\ y: 2,4,6,8$", "$x: 1,2,3,4;\\ y: 2,4,8,16$", "$x: 1,2,3,4;\\ y: 1,4,9,16$", "$x: 1,2,3,4;\\ y: 5,7,9,11$"], [1, 2]));
  q.push(ms("hard", "Which statements are true about linear relations?", ["They have constant slope", "They are always functions", "Their rate of change is variable", "They can be written as $y = mx + b$"], [0, 1, 3]));
  q.push(ms("hard", "Which real-world scenarios produce non-linear relations?", ["Radius vs circumference of a circle", "Side vs area of a square", "Radius vs area of a circle", "Time vs distance at constant speed"], [1, 2]));
  q.push(ms("hard", "Given $x: 0,1,2,3$ and $y: 1,3,7,13$, which statements are true?", ["First differences: $2, 4, 6$", "Second differences: $2, 2$", "The relation is quadratic (non-linear)", "The relation is linear"], [0, 1, 2]));
  // true / false
  q.push(tf("hard", "$y = 2x - 5$ is linear because its graph is a straight line.", true));
  q.push(tf("hard", "$y = x^2 + 2x + 1$ is linear.", false, "It is quadratic."));
  q.push(tf("hard", "A relation with constant (non-zero) second differences is always quadratic.", true));
  q.push(tf("hard", "The equation $y = \\frac{1}{x}$ is linear for $x \\neq 0$.", false, "It is a hyperbola — non-linear."));
  q.push(tf("hard", "A horizontal line ($y = 3$) is a linear relation.", true));
  // fill in the blank
  q.push(fill("hard", "The first differences of a linear relation are ___.", ["constant"]));
  q.push(fill("hard", "$y = 3^x$ is an example of a(n) ___ relation (non-linear).", ["exponential"]));
  q.push(fill("hard", "A quadratic relation has ___ differences constant.", ["second"]));
  q.push(num("hard", "The equation $y = -2x + 8$ has slope ___ (and is linear).", -2, 0));
  q.push(num("hard", "The area of a circle $A = \\pi r^2$ is non-linear because the exponent on $r$ is ___.", 2, 0));

  return q;
}

// ── 4.2 Representing Linear Relations ─────────────────────────
export function gen42() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The equation $y = 2x + 3$ has slope:", ["$2$", "$3$", "$-2$", "$-3$"], 0));
  q.push(mc("easy", "The y-intercept of $y = -4x + 5$ is:", ["$-4$", "$5$", "$-5$", "$4$"], 1));
  q.push(mc("easy", "Which table represents $y = 3x - 1$?", ["$x: 0,1,2;\\ y: -1,2,5$", "$x: 0,1,2;\\ y: 1,4,7$", "$x: 0,1,2;\\ y: -1,3,5$", "$x: 0,1,2;\\ y: 0,3,6$"], 0));
  q.push(mc("easy", "The slope of a horizontal line is:", ["$0$", "$1$", "Undefined", "$-1$"], 0));
  q.push(mc("easy", "A line passes through $(0,4)$ and $(2,10)$. The slope is:", ["$3$", "$6$", "$2$", "$-3$"], 0, "$\\frac{10-4}{2-0} = 3$."));
  // multiple select
  q.push(ms("easy", "Which equations have slope $3$?", ["$y = 3x + 1$", "$y = \\frac{x}{3} + 2$", "$y = 3x - 4$", "$y = -3x + 5$"], [0, 2]));
  q.push(ms("easy", "Which tables represent linear relations?", ["$x: 0,1,2;\\ y: 3,5,7$", "$x: 0,1,2;\\ y: 1,2,4$", "$x: 0,1,2;\\ y: -2,0,2$", "$x: 0,1,2;\\ y: 4,7,10$"], [0, 2, 3]));
  q.push(ms("easy", "The point $(2,7)$ lies on which lines?", ["$y = 2x + 3$", "$y = 3x + 1$", "$y = x + 5$", "$y = 4x - 1$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are correct ways to represent a linear relation?", ["Equation", "Table of values", "Graph", "Words/description"], [0, 1, 2, 3]));
  q.push(ms("easy", "The graph of $y = 2x - 3$ has:", ["Slope $2$", "y-intercept $-3$", "Point $(0,-3)$", "Slope $-2$"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "$y = 4x + 1$ has slope $4$.", true));
  q.push(tf("easy", "The y-intercept of $y = -2x + 7$ is $-2$.", false, "It is $7$."));
  q.push(tf("easy", "A table with first differences $2,2,2$ represents a linear relation.", true));
  q.push(tf("easy", "The slope of a vertical line is $0$.", false, "It is undefined."));
  q.push(tf("easy", "The equation $y = 5$ is a horizontal line.", true));
  // fill in the blank
  q.push(num("easy", "The slope of $y = 3x - 2$ is ___.", 3, 0));
  q.push(num("easy", "The y-intercept of $y = -x + 6$ is ___.", 6, 0));
  q.push(num("easy", "For the line $y = 2x + 1$, when $x = 3$, $y =$ ___.", 7, 0));
  q.push(num("easy", "The slope between $(1,3)$ and $(4,9)$ is ___.", 2, 0));
  q.push(fill("easy", "A linear relation with slope $-\\frac{1}{2}$ and y-intercept $4$ is $y =$ ___.", ["-1/2x+4", "-\\frac{1}{2}x+4", "-\\frac{1}{2}x + 4", "-0.5x+4"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "A line has slope $3$ and passes through $(0,-2)$. The equation is:", ["$y = 3x - 2$", "$y = 3x + 2$", "$y = -3x - 2$", "$y = -3x + 2$"], 0));
  q.push(mc("medium", "Which equation represents a line through $(2,5)$ and $(4,11)$?", ["$y = 3x - 1$", "$y = 2x + 1$", "$y = 3x + 1$", "$y = 2x - 1$"], 0, "Slope $3$; $5 = 3(2)+b \\Rightarrow b = -1$."));
  q.push(mc("medium", "A line passes through $(0,3)$ with slope $-2$. The equation is:", ["$y = -2x + 3$", "$y = 2x + 3$", "$y = -2x - 3$", "$y = 2x - 3$"], 0));
  q.push(mc("medium", "What is the first difference for $y = 3x - 2$ when $x$ increases by $1$?", ["$3$", "$-2$", "$1$", "$-3$"], 0));
  q.push(mc("medium", "A linear relation has slope $-\\frac{2}{3}$ and passes through $(3,1)$. The equation is:", ["$y = -\\frac{2}{3}x + 3$", "$y = -\\frac{2}{3}x + 1$", "$y = -\\frac{2}{3}x - 3$", "$y = \\frac{2}{3}x + 3$"], 0, "$1 = -\\frac{2}{3}(3) + b \\Rightarrow b = 3$."));
  // multiple select
  q.push(ms("medium", "Which equations represent lines with slope $-\\frac{1}{2}$?", ["$y = -0.5x + 3$", "$y = -\\frac{x}{2} + 1$", "$y = \\frac{x}{-2} + 4$", "$y = \\frac{1}{2}x - 3$"], [0, 1, 2]));
  q.push(ms("medium", "Which points lie on the line $y = 2x - 5$?", ["$(0,-5)$", "$(3,1)$", "$(4,3)$", "$(-1,-7)$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A table has $x: 0,1,2,3$ and $y: -1,2,5,8$. Which statements are true?", ["Slope is $3$", "Equation is $y = 3x - 1$", "y-intercept is $-1$", "First difference is $3$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which methods can find the equation of a line?", ["Slope and y-intercept", "Two points", "A table of values", "A graph"], [0, 1, 2, 3]));
  q.push(ms("medium", "A line has equation $y = -\\frac{3}{4}x + 2$. Which are correct?", ["Slope is $-\\frac{3}{4}$", "y-intercept is $2$", "Point $(4,-1)$ lies on it", "Point $(0,2)$ lies on it"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "The first differences of a linear relation are constant.", true));
  q.push(tf("medium", "$y = 2x + 3$ and $y = 2x - 1$ have the same slope.", true));
  q.push(tf("medium", "A line with slope $0$ is vertical.", false, "It is horizontal."));
  q.push(tf("medium", "The point $(2,7)$ lies on $y = 3x + 1$.", true, "$3(2)+1 = 7$."));
  q.push(tf("medium", "A table with first differences $1,3,5$ represents a linear relation.", false, "First differences are not constant — non-linear."));
  // fill in the blank
  q.push(fill("medium", "The equation of a line with slope $4$ and y-intercept $-3$ is $y =$ ___.", ["4x-3", "4x - 3"]));
  q.push(num("medium", "A line passes through $(1,5)$ and $(3,11)$. Its slope is ___.", 3, 0));
  q.push(num("medium", "The y-intercept of $y = -5x + 2$ is ___.", 2, 0));
  q.push(num("medium", "For $y = \\frac{2}{3}x - 4$, when $x = 9$, $y =$ ___.", 2, 0));
  q.push(num("medium", "The first difference for $y = 0.5x + 7$ is ___.", 0.5, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A line passes through $(2,-1)$ and $(-4,11)$. The equation is:", ["$y = -2x + 3$", "$y = 2x - 5$", "$y = -2x - 3$", "$y = 2x + 3$"], 0, "Slope $\\frac{12}{-6} = -2$; $-1 = -2(2)+b \\Rightarrow b = 3$."));
  q.push(mc("hard", "A line has x-intercept $4$ and y-intercept $-6$. The equation is:", ["$y = \\frac{3}{2}x - 6$", "$y = -\\frac{3}{2}x - 6$", "$y = \\frac{2}{3}x - 6$", "$y = -\\frac{2}{3}x + 6$"], 0, "Slope $\\frac{-6-0}{0-4} = \\frac{3}{2}$."));
  q.push(mc("hard", "A linear relation has first differences $5,5,5$ and passes through $(0,-2)$. The equation is:", ["$y = 5x - 2$", "$y = -5x + 2$", "$y = 5x + 2$", "$y = -5x - 2$"], 0));
  q.push(mc("hard", "The slope of the line $2x - 3y = 6$ is:", ["$\\frac{2}{3}$", "$-\\frac{2}{3}$", "$\\frac{3}{2}$", "$-\\frac{3}{2}$"], 0, "$y = \\frac{2}{3}x - 2$."));
  q.push(mc("hard", "A line passes through $(3,7)$ and $(3,-2)$. This line is:", ["Horizontal", "Vertical", "Slope $0$", "Slope $3$"], 1, "Same x-value → vertical."));
  // multiple select
  q.push(ms("hard", "Which equations represent the same line?", ["$y = 2x + 3$", "$2x - y + 3 = 0$", "$y - 3 = 2x$", "$y = 2(x + 1) + 1$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A line passes through $(1,4)$ and $(3,10)$. Which statements are true?", ["Slope is $3$", "Equation is $y = 3x + 1$", "y-intercept is $1$", "It also passes through $(0,1)$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which points lie on the line $3x - 2y = 12$?", ["$(4,0)$", "$(0,-6)$", "$(2,-3)$", "$(6,3)$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A table has $x: 1,2,3,4$ and $y: 5,8,11,14$. Which are true?", ["Slope is $3$", "Equation is $y = 3x + 2$", "y-intercept is $2$", "First difference is $3$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which equations are written in slope-intercept form?", ["$y = 4x + 1$", "$2x + y = 5$", "$y - 3 = 2x$", "$y = -x + 7$"], [0, 3], "B is standard form; C is point-slope-like, not $y = mx + b$."));
  // true / false
  q.push(tf("hard", "$y = 2x + 3$ and $2x - y + 3 = 0$ are the same line.", true));
  q.push(tf("hard", "A line with undefined slope is horizontal.", false, "It is vertical."));
  q.push(tf("hard", "The y-intercept of $3x + 4y = 12$ is $3$.", true, "Set $x=0 \\Rightarrow 4y = 12 \\Rightarrow y = 3$."));
  q.push(tf("hard", "A table with first differences $2,4,6$ represents a linear relation.", false, "Second differences are constant → quadratic."));
  q.push(tf("hard", "The point $(-1,5)$ lies on $y = -3x + 2$.", true, "$-3(-1)+2 = 5$."));
  // fill in the blank
  q.push(fill("hard", "The equation of the line through $(2,5)$ and $(6,13)$ is $y =$ ___.", ["2x+1", "2x + 1"]));
  q.push(num("hard", "The slope of the line $4x - 2y = 8$ is ___.", 2, 0));
  q.push(num("hard", "The x-intercept of $y = -3x + 9$ is ___.", 3, 0));
  q.push(fill("hard", "A line has slope $-\\frac{2}{5}$ and passes through $(5,1)$. Its equation is $y =$ ___.", ["-2/5x+3", "-\\frac{2}{5}x+3", "-\\frac{2}{5}x + 3"]));
  q.push(fill("hard", "The first difference of $y = \\frac{1}{3}x - 2$ is ___.", ["1/3", "\\frac{1}{3}"]));

  return q;
}

// ── 4.3 Comparing Lines ──────────────────────────────────────
export function gen43() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Which line is steeper?", ["$y = 2x + 1$", "$y = 5x - 3$", "$y = x + 4$", "$y = 0.5x + 2$"], 1, "Slope $5$ is the largest."));
  q.push(mc("easy", "Which line has the greater y-intercept?", ["$y = 3x + 2$", "$y = -x + 5$", "$y = 4x - 1$", "$y = 2x + 0$"], 1, "y-intercept $5$."));
  q.push(mc("easy", "Compare $y = 2x + 3$ and $y = 2x - 4$. They have:", ["Same slope, different y-intercept", "Different slope, same y-intercept", "Same slope and y-intercept", "Different slope and y-intercept"], 0));
  q.push(mc("easy", "Which relation has the greater rate of change?", ["$y = 3x + 1$", "$y = \\frac{x}{2} + 5$", "$y = -2x + 7$", "$y = x + 10$"], 0, "Slope $3$ is the largest."));
  q.push(mc("easy", "Plan A costs $\\textdollar 5$/hour. Plan B costs $\\textdollar 3$/hour plus a $\\textdollar 10$ setup fee. Which is cheaper for 2 hours?", ["Plan A", "Plan B", "Both equal", "Cannot determine"], 0, "A $= \\textdollar 10$; B $= \\textdollar 16$."));
  // multiple select
  q.push(ms("easy", "Which lines are parallel?", ["$y = 3x + 1$", "$y = 3x - 2$", "$y = -3x + 4$", "$y = \\frac{1}{3}x + 5$"], [0, 1]));
  q.push(ms("easy", "Which lines have the same y-intercept?", ["$y = 2x + 4$", "$y = -3x + 4$", "$y = x - 4$", "$y = 5x + 4$"], [0, 1, 3]));
  q.push(ms("easy", "Comparing $y = 4x - 2$ and $y = 2x + 5$, which are true?", ["First has greater slope", "Second has greater y-intercept", "First is steeper", "Second is steeper"], [0, 1, 2]));
  q.push(ms("easy", "Which relations have a rate of change greater than 2?", ["$y = 3x + 1$", "$y = 2.5x - 3$", "$y = 2x + 4$", "$y = \\frac{5}{2}x - 1$"], [0, 1, 3]));
  q.push(ms("easy", "Plan A: $y = 4x + 10$. Plan B: $y = 6x + 5$. For $x = 3$:", ["Plan A costs 22", "Plan B costs 23", "Plan A is cheaper", "Plan B is cheaper"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "$y = 5x + 2$ is steeper than $y = 3x + 7$.", true));
  q.push(tf("easy", "$y = 2x + 3$ and $y = 2x - 5$ are parallel.", true));
  q.push(tf("easy", "A line with slope 0 is steeper than a line with slope 2.", false));
  q.push(tf("easy", "The y-intercept of $y = -4x + 6$ is greater than that of $y = 3x + 2$.", true, "$6 > 2$."));
  q.push(tf("easy", "Plan A: $y = 2x + 5$, Plan B: $y = 3x + 2$. At $x = 0$, Plan A is more expensive.", true, "$5 > 2$."));
  // fill in the blank
  q.push(num("easy", "The slope of $y = 7x - 1$ is ___ (greater than the slope of $y = 4x + 3$).", 7, 0));
  q.push(num("easy", "The y-intercept of $y = -2x + 8$ is ___ (greater than that of $y = 5x - 3$).", 8, 0));
  q.push(fill("easy", "Lines with slopes $3$ and $3$ are ___.", ["parallel"]));
  q.push(fill("easy", "Plan A costs $5x + 2$, Plan B costs $3x + 8$. At $x = 2$, Plan ___ is cheaper (12 vs 14).", ["A", "Plan A", "a"]));
  q.push(num("easy", "The line $y = 6x$ has slope ___ (its y-intercept is 0).", 6, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Compare $y = 4x - 1$ and $y = -2x + 5$. Which is true?", ["First has greater slope and y-intercept", "First has greater slope, second has greater y-intercept", "Second has greater slope and y-intercept", "Both have the same slope"], 1, "Slope $4 > -2$; y-intercept $-1 < 5$."));
  q.push(mc("medium", "Car A: $d = 60t$. Car B: $d = 50t + 20$. After 3 hours:", ["Car A is ahead", "Car B is ahead", "They are tied", "Cannot determine"], 0, "A $= 180$, B $= 170$."));
  q.push(mc("medium", "Which line increases faster?", ["$y = 2x + 10$", "$y = 3x - 5$", "$y = 0.5x + 20$", "$y = -x + 8$"], 1, "Slope $3$."));
  q.push(mc("medium", "Plan A: $y = 2x + 15$. Plan B: $y = 5x + 3$. For what $x$ are they equal?", ["$x = 3$", "$x = 4$", "$x = 5$", "$x = 6$"], 1, "$2x + 15 = 5x + 3 \\Rightarrow x = 4$."));
  q.push(mc("medium", "Compare $y = \\frac{1}{2}x + 3$ and $y = \\frac{2}{3}x - 1$. Which is correct?", ["First has greater slope and y-intercept", "Second has greater slope, first has greater y-intercept", "First has greater slope, second has greater y-intercept", "Both have the same slope"], 1, "Slope $\\frac{2}{3} > \\frac{1}{2}$; y-intercept $3 > -1$."));
  // multiple select
  q.push(ms("medium", "Comparing $y = -3x + 8$ and $y = 2x - 4$, which are correct?", ["First has smaller slope", "Second has greater slope", "First has greater y-intercept", "Second has greater y-intercept"], [0, 1, 2]));
  q.push(ms("medium", "Plan A: $y = 4x + 10$, Plan B: $y = 6x + 5$. For $x > 2.5$:", ["Plan A is cheaper", "Plan B is cheaper", "Plan A has the lower rate", "Plan B has the higher rate"], [0, 2, 3]));
  q.push(ms("medium", "Which lines have the same steepness?", ["$y = 2x + 3$", "$2x - y = 5$", "$y = x + 2$", "$y = 2x - 1$"], [0, 1, 3]));
  q.push(ms("medium", "Which are true about $y = 3x + 2$ and $y = 2x + 5$?", ["First has greater slope", "Second has greater y-intercept", "They intersect at $x = 3$", "They intersect at $x = -3$"], [0, 1, 2]));
  q.push(ms("medium", "Tank 1 starts with 10 L and fills at 2 L/min; Tank 2 starts empty and fills at 4 L/min. Which are true?", ["Tank 1: $V = 2t + 10$", "Tank 2: $V = 4t$", "For $t > 5$, Tank 2 has more", "They are equal at $t = 5$"], [0, 1, 2, 3], "$2t + 10 = 4t \\Rightarrow t = 5$."));
  // true / false
  q.push(tf("medium", "A line with slope 5 is always steeper than a line with slope 3.", true));
  q.push(tf("medium", "$y = 0.5x + 10$ and $y = 0.5x - 3$ are parallel.", true));
  q.push(tf("medium", "Plan A: $y = 2x + 8$, Plan B: $y = 3x + 5$. Plan B is always more expensive.", false, "For $x < 3$, Plan A is more expensive."));
  q.push(tf("medium", "The y-intercept of $y = -x + 4$ is greater than that of $y = -2x + 3$.", true, "$4 > 3$."));
  q.push(tf("medium", "Two lines with different slopes always intersect exactly once.", true));
  // fill in the blank
  q.push(num("medium", "Comparing $y = 5x - 2$ and $y = 3x + 4$, the slope of the first is ___.", 5, 0));
  q.push(num("medium", "At $x = 3$, both $y = 2x + 1$ and $y = 3x - 2$ equal ___.", 7, 0));
  q.push(num("medium", "Plan A: $y = 4x + 3$, Plan B: $y = 2x + 11$. They are equal when $x =$ ___.", 4, 0));
  q.push(num("medium", "The y-intercept of $y = -2x + 9$ is ___ (greater than that of $y = 3x - 5$).", 9, 0));
  q.push(fill("medium", "Two lines are parallel if their ___ are equal.", ["slopes", "slope"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Line 1: $3x - 2y = 6$. Line 2: $y = \\frac{3}{2}x - 5$. Which is true?", ["Same slope, different y-intercept", "Different slope, same y-intercept", "Same slope and y-intercept", "Different slope and y-intercept"], 0, "Line 1: $y = \\frac{3}{2}x - 3$."));
  q.push(mc("hard", "Company A: $C = 2.5h + 15$. Company B: $C = 3h + 10$. For what hours is A cheaper?", ["$h < 10$", "$h > 10$", "$h = 10$", "Always"], 1, "$2.5h + 15 < 3h + 10 \\Rightarrow h > 10$."));
  q.push(mc("hard", "Compare $y = 4x - 3$ and $y = -2x + 9$. They intersect at:", ["$x = 1$", "$x = 2$", "$x = 3$", "$x = -1$"], 1, "$4x - 3 = -2x + 9 \\Rightarrow x = 2$."));
  q.push(mc("hard", "Line A passes through $(1,5)$ and $(3,11)$. Line B has slope 2 and y-intercept 4. Which is true?", ["Same line", "Parallel", "They intersect at $(2,8)$", "Perpendicular"], 2, "Line A: $y = 3x + 2$; Line B: $y = 2x + 4$; intersect at $(2,8)$."));
  q.push(mc("hard", "Plan A: $y = 4x + 20$, Plan B: $y = 6x + 5$. For what $x$ is A cheaper than B by at least 5?", ["$x \\ge 10$", "$x \\ge 15$", "$x \\le 10$", "$x \\le 5$"], 0, "$4x + 25 \\le 6x + 5 \\Rightarrow x \\ge 10$."));
  // multiple select
  q.push(ms("hard", "Comparing $y = -2x + 7$ and $y = 3x - 4$, which are correct?", ["First has smaller slope", "Second has greater y-intercept", "They intersect at $x = 2.2$", "First is decreasing, second is increasing"], [0, 2, 3], "$-2x + 7 = 3x - 4 \\Rightarrow x = 2.2$. Second y-intercept $-4 < 7$."));
  q.push(ms("hard", "Three lines: $y = 2x + 3$, $y = 2x - 5$, $y = -2x + 3$. Which are true?", ["First and second are parallel", "First and third intersect at $(0,3)$", "Second and third intersect at $(2,-1)$", "All three meet at one point"], [0, 1, 2]));
  q.push(ms("hard", "Company A: $C = 30d + 50$. Company B: $C = 40d + 20$. Which are true?", ["For $d = 3$, A is cheaper", "For $d = 3$, B is cheaper", "They are equal at $d = 3$", "A has the lower daily rate"], [2, 3], "At $d = 3$ both cost $140$ (equal); A's rate $30 < 40$."));
  q.push(ms("hard", "Which lines have a greater slope than $y = \\frac{2}{3}x + 1$?", ["$y = 0.7x + 4$", "$y = 0.6x - 2$", "$y = \\frac{3}{4}x + 1$", "$y = \\frac{5}{8}x + 3$"], [0, 2], "$\\frac{2}{3} \\approx 0.667$; $0.7$ and $0.75$ exceed it."));
  q.push(ms("hard", "At $x = 5$, which lines have the greatest y-value?", ["$y = 3x - 2$", "$y = 2x + 5$", "$y = -x + 20$", "$y = 4x - 7$"], [1, 2], "B and C both give $15$."));
  // true / false
  q.push(tf("hard", "Lines with slopes 2 and $-2$ are perpendicular.", false, "Product $= -4 \\neq -1$."));
  q.push(tf("hard", "$y = 3x + 1$ and $y = 3x + 5$ are parallel and never intersect.", true));
  q.push(tf("hard", "A line with slope 0.1 is less steep than a line with slope 0.5.", true));
  q.push(tf("hard", "Plan A: $y = 5x$, Plan B: $y = 4x + 10$. Plan A is always cheaper.", false, "For $x < 10$, Plan B is cheaper."));
  q.push(tf("hard", "Two lines with the same y-intercept but different slopes intersect at that y-intercept.", true));
  // fill in the blank
  q.push(num("hard", "Compare $y = -3x + 8$ and $y = 2x - 4$. They intersect at $x =$ ___.", 2.4, 0.001));
  q.push(num("hard", "The slope of Line A, $y = \\frac{3}{4}x - 2$, is ___ (as a decimal).", 0.75, 0.001));
  q.push(num("hard", "Plan A: $y = 5x + 12$, Plan B: $y = 8x + 3$. Plan A is cheaper when $x >$ ___.", 3, 0));
  q.push(num("hard", "The line $y = -\\frac{1}{2}x + 6$ has y-intercept ___ (greater than that of $y = 4x - 3$).", 6, 0));
  q.push(num("hard", "Two lines are perpendicular if the product of their slopes is ___.", -1, 0));

  return q;
}

// ── 4.4 Graphing Special Lines ───────────────────────────────
export function gen44() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The equation of a horizontal line through $(3, -2)$ is:", ["$x = 3$", "$y = -2$", "$y = 3$", "$x = -2$"], 1));
  q.push(mc("easy", "The equation of a vertical line through $(-4, 5)$ is:", ["$x = -4$", "$y = 5$", "$x = 5$", "$y = -4$"], 0));
  q.push(mc("easy", "A line through the origin with slope $3$ has equation:", ["$y = 3x$", "$y = x + 3$", "$y = 3x + 1$", "$y = -3x$"], 0));
  q.push(mc("easy", "The slope of a horizontal line is:", ["$0$", "$1$", "Undefined", "$-1$"], 0));
  q.push(mc("easy", "The slope of a vertical line is:", ["$0$", "$1$", "Undefined", "$-1$"], 2));
  // multiple select
  q.push(ms("easy", "Which equations represent horizontal lines?", ["$y = 4$", "$x = -2$", "$y = -1$", "$x = 7$"], [0, 2]));
  q.push(ms("easy", "Which equations represent vertical lines?", ["$x = 0$", "$y = 0$", "$x = -5$", "$y = 3$"], [0, 2]));
  q.push(ms("easy", "Which lines pass through the origin?", ["$y = 2x$", "$y = x - 1$", "$y = -3x$", "$y = \\frac{1}{2}x$"], [0, 2, 3]));
  q.push(ms("easy", "Which points lie on the line $y = 5$?", ["$(3, 5)$", "$(5, 3)$", "$(-2, 5)$", "$(0, 5)$"], [0, 2, 3]));
  q.push(ms("easy", "Which points lie on the line $x = -3$?", ["$(-3, 1)$", "$(-3, 7)$", "$(1, -3)$", "$(-3, -2)$"], [0, 1, 3]));
  // true / false
  q.push(tf("easy", "The line $y = 4$ is horizontal.", true));
  q.push(tf("easy", "The line $x = -2$ is horizontal.", false, "It is vertical."));
  q.push(tf("easy", "The line $y = 3x$ passes through the origin.", true));
  q.push(tf("easy", "A vertical line has slope $0$.", false, "Its slope is undefined."));
  q.push(tf("easy", "The line $y = 0$ is the x-axis.", true));
  // fill in the blank
  q.push(num("easy", "A horizontal line through $(2, -5)$ has equation $y =$ ___.", -5, 0));
  q.push(num("easy", "A vertical line through $(-1, 4)$ has equation $x =$ ___.", -1, 0));
  q.push(fill("easy", "The line through the origin with slope $-\\frac{2}{3}$ is $y =$ ___.", ["-2/3x", "-\\frac{2}{3}x", "-2x/3"]));
  q.push(num("easy", "The equation of the x-axis is $y =$ ___.", 0, 0));
  q.push(num("easy", "The equation of the y-axis is $x =$ ___.", 0, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Which line is parallel to $y = 3x - 2$?", ["$y = 3x + 5$", "$y = -3x + 1$", "$y = \\frac{1}{3}x - 2$", "$y = 2x - 2$"], 0));
  q.push(mc("medium", "Which line is perpendicular to $y = 2x + 1$?", ["$y = -\\frac{1}{2}x + 3$", "$y = \\frac{1}{2}x - 4$", "$y = -2x + 5$", "$y = 2x - 3$"], 0, "Slopes multiply to $-1$."));
  q.push(mc("medium", "The lines $y = 4x$ and $y = 4x + 3$ are:", ["Parallel", "Perpendicular", "Intersecting at one point", "The same line"], 0));
  q.push(mc("medium", "A line passes through $(0,0)$ and $(2,6)$. Its equation is:", ["$y = 3x$", "$y = \\frac{1}{3}x$", "$y = 6x$", "$y = x + 3$"], 0, "Slope $= \\frac{6}{2} = 3$."));
  q.push(mc("medium", "The lines $y = -2x + 5$ and $y = \\frac{1}{2}x - 3$ are:", ["Parallel", "Perpendicular", "Neither", "The same line"], 1, "Slopes $-2$ and $\\frac{1}{2}$ multiply to $-1$."));
  // multiple select
  q.push(ms("medium", "Which lines are perpendicular to $y = \\frac{2}{3}x + 1$?", ["$y = -\\frac{3}{2}x + 4$", "$y = \\frac{3}{2}x - 2$", "$y = -\\frac{2}{3}x + 7$", "$y = -1.5x + 5$"], [0, 3]));
  q.push(ms("medium", "Which lines are parallel to $y = -4x + 2$?", ["$y = -4x - 1$", "$y = 4x + 3$", "$y = -\\frac{1}{4}x + 5$", "$y = -4x + 0$"], [0, 3]));
  q.push(ms("medium", "Which equations represent lines through the origin?", ["$y = \\frac{1}{2}x$", "$y = -3x$", "$y = 2x + 1$", "$y = 0x$"], [0, 1, 3]));
  q.push(ms("medium", "Which statements about $y = 5$ are true?", ["It is horizontal", "It has slope 0", "It passes through $(0,5)$", "It is vertical"], [0, 1, 2]));
  q.push(ms("medium", "Which statements about $x = -1$ are true?", ["It is vertical", "It has undefined slope", "It passes through $(-1,0)$", "It has slope 0"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "The lines $y = 2x$ and $y = 2x - 5$ are parallel.", true));
  q.push(tf("medium", "$y = \\frac{1}{2}x + 3$ is perpendicular to $y = 2x - 1$.", false, "Slopes multiply to $1$, not $-1$."));
  q.push(tf("medium", "A vertical line has an undefined slope.", true));
  q.push(tf("medium", "The line $y = 0$ is the x-axis.", true));
  q.push(tf("medium", "Lines with slopes $3$ and $-\\frac{1}{3}$ are perpendicular.", true, "Product $= -1$."));
  // fill in the blank
  q.push(num("medium", "A line parallel to $y = 5x - 2$ has slope ___.", 5, 0));
  q.push(fill("medium", "A line perpendicular to $y = -\\frac{3}{4}x + 1$ has slope ___.", ["4/3", "\\frac{4}{3}"]));
  q.push(num("medium", "The equation of a vertical line through $(2, -7)$ is $x =$ ___.", 2, 0));
  q.push(fill("medium", "The line through the origin with slope $-\\frac{5}{2}$ is $y =$ ___.", ["-5/2x", "-\\frac{5}{2}x", "-5x/2", "-2.5x"]));
  q.push(fill("medium", "The lines $y = 3$ and $y = -2$ are ___.", ["parallel"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Which line is perpendicular to $3x - 2y = 6$?", ["$y = -\\frac{2}{3}x + 4$", "$y = \\frac{3}{2}x + 1$", "$y = -\\frac{3}{2}x + 5$", "$y = \\frac{2}{3}x - 3$"], 0, "$3x - 2y = 6 \\Rightarrow y = \\frac{3}{2}x - 3$; perpendicular slope $-\\frac{2}{3}$."));
  q.push(mc("hard", "The lines $x = 4$ and $y = -3$ intersect at:", ["$(4, -3)$", "$(-3, 4)$", "$(4, 0)$", "$(0, -3)$"], 0));
  q.push(mc("hard", "Which equation is a vertical line through $(5, -2)$?", ["$x = 5$", "$y = -2$", "$x = -2$", "$y = 5$"], 0));
  q.push(mc("hard", "A line has slope $0$ and passes through $(3, -4)$. Its equation is:", ["$y = -4$", "$x = 3$", "$y = 0$", "$y = -4x$"], 0));
  q.push(mc("hard", "The lines $y = 2x + 3$ and $y = -\\frac{1}{2}x - 1$ intersect at:", ["$(-1.6, -0.2)$", "$(-1.6, 0.2)$", "$(1.6, 6.2)$", "$(1.6, -0.2)$"], 0, "$2x + 3 = -\\frac{1}{2}x - 1 \\Rightarrow x = -1.6$, $y = -0.2$."));
  // multiple select
  q.push(ms("hard", "Which lines are perpendicular to $4x + 2y = 8$?", ["$y = \\frac{1}{2}x + 3$", "$y = -\\frac{1}{2}x + 1$", "$y = 0.5x - 2$", "$y = 2x + 5$"], [0, 2], "$4x + 2y = 8 \\Rightarrow y = -2x + 4$; perpendicular slope $\\frac{1}{2}$."));
  q.push(ms("hard", "Which lines are parallel to $y - 3 = 2(x + 1)$?", ["$y = 2x + 5$", "$y = 2x - 1$", "$y - 2x = 7$", "$y = -2x + 3$"], [0, 1, 2], "The line simplifies to $y = 2x + 5$ (slope 2)."));
  q.push(ms("hard", "Which lines pass through the origin?", ["$y = 3x$", "$y = -x$", "$y = 2x - 4$", "$y = 0$"], [0, 1, 3]));
  q.push(ms("hard", "A line is perpendicular to $y = \\frac{3}{5}x - 2$ and passes through $(0,4)$. Which are true?", ["Slope is $-\\frac{5}{3}$", "Equation is $y = -\\frac{5}{3}x + 4$", "y-intercept is 4", "Equation is $y = \\frac{3}{5}x + 4$"], [0, 1, 2]));
  q.push(ms("hard", "The lines $x = 3$, $y = 2$, $x = -1$, $y = -4$ form a rectangle. Which equal its perimeter?", ["$16$", "$2(4 + 6)$", "$20$", "$24$"], [1, 2], "Width $= 4$, height $= 6$, perimeter $= 2(4+6) = 20$."));
  // true / false
  q.push(tf("hard", "The lines $y = 5x$ and $y = -\\frac{1}{5}x$ are perpendicular.", true, "Product of slopes $= -1$."));
  q.push(tf("hard", "A line with undefined slope is vertical.", true));
  q.push(tf("hard", "The lines $x = -3$ and $x = 4$ are parallel.", true, "Both are vertical."));
  q.push(tf("hard", "The lines $y = 2$ and $y = -3$ are perpendicular.", false, "Both are horizontal — they are parallel."));
  q.push(tf("hard", "All horizontal lines are parallel to each other.", true));
  // fill in the blank
  q.push(fill("hard", "A line perpendicular to $y = -\\frac{2}{5}x + 3$ through the origin is $y =$ ___.", ["5/2x", "\\frac{5}{2}x", "5x/2", "2.5x"]));
  q.push(fill("hard", "The vertical line $x = 7$ and the horizontal line $y = -3$ intersect at ___.", ["(7,-3)", "(7, -3)"]));
  q.push(num("hard", "The line $y = 4$ has slope ___.", 0, 0));
  q.push(fill("hard", "The line $x = -2$ has ___ slope.", ["undefined"]));
  q.push(num("hard", "The equation of the line with slope $0$ and y-intercept $6$ is $y =$ ___.", 6, 0));

  return q;
}

// ── 4.5 Transformations of Lines ─────────────────────────────
export function gen45() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The line $y = 2x + 3$ is shifted up by 4 units. The new equation is:", ["$y = 2x + 7$", "$y = 2x - 1$", "$y = 6x + 3$", "$y = 2x + 3$"], 0));
  q.push(mc("easy", "The line $y = 3x - 2$ is shifted down by 5 units. The new equation is:", ["$y = 3x - 7$", "$y = 3x + 3$", "$y = -2x - 2$", "$y = 3x - 2$"], 0));
  q.push(mc("easy", "The line $y = 4x$ is reflected across the x-axis. The new equation is:", ["$y = -4x$", "$y = 4x$", "$y = -\\frac{1}{4}x$", "$y = \\frac{1}{4}x$"], 0));
  q.push(mc("easy", "The line $y = \\frac{1}{2}x + 1$ is vertically stretched by a factor of 3. The new slope is:", ["$\\frac{3}{2}$", "$\\frac{1}{6}$", "$3$", "$\\frac{1}{2}$"], 0, "$\\frac{1}{2} \\times 3 = \\frac{3}{2}$."));
  q.push(mc("easy", "The line $y = 2x - 1$ is shifted right by 3 units. The new equation is:", ["$y = 2(x - 3) - 1$", "$y = 2(x + 3) - 1$", "$y = 2x - 3 - 1$", "$y = 2x + 3 - 1$"], 0));
  // multiple select
  q.push(ms("easy", "Which transformations change the slope of a line?", ["Vertical shift", "Horizontal shift", "Vertical stretch", "Reflection across the x-axis"], [2, 3]));
  q.push(ms("easy", "The line $y = 3x + 2$ is shifted up by 5. Which equations represent the new line?", ["$y = 3x + 7$", "$y = 3(x) + 2 + 5$", "$y = 3x + 7 + 0$", "$y = 3x + 10$"], [0, 1, 2]));
  q.push(ms("easy", "Reflecting $y = -2x + 4$ across the x-axis gives:", ["$y = 2x - 4$", "$y = -2x - 4$", "$y = 2x + 4$", "$y = -(-2x + 4)$"], [0, 3]));
  q.push(ms("easy", "Which transformations preserve the slope?", ["Vertical shift", "Horizontal shift", "Vertical stretch", "Reflection across the y-axis"], [0, 1]));
  q.push(ms("easy", "The line $y = x - 3$ is shifted left by 2. Which are true?", ["New equation: $y = (x + 2) - 3$", "New equation: $y = x - 1$", "New equation: $y = x - 5$", "The y-intercept increases by 2"], [0, 1, 3], "$y = (x+2)-3 = x-1$; y-intercept $-3 \\to -1$."));
  // true / false
  q.push(tf("easy", "Shifting a line up changes its slope.", false));
  q.push(tf("easy", "Reflecting a line across the x-axis changes the sign of the slope.", true));
  q.push(tf("easy", "A vertical stretch of factor 2 changes $y = 3x + 1$ to $y = 6x + 2$.", true));
  q.push(tf("easy", "Shifting a line right by 3 changes its y-intercept.", true, "e.g. $y = 2x + 3 \\to y = 2x - 3$."));
  q.push(tf("easy", "Reflecting $y = 4x$ across the y-axis gives $y = -4x$.", true));
  // fill in the blank
  q.push(fill("easy", "$y = 5x - 2$ shifted up by 3 gives $y =$ ___.", ["5x+1", "5x + 1"]));
  q.push(fill("easy", "$y = -x + 4$ reflected across the x-axis gives $y =$ ___.", ["x-4", "x - 4"]));
  q.push(fill("easy", "$y = 2x$ stretched vertically by factor 4 gives $y =$ ___.", ["8x"]));
  q.push(fill("easy", "$y = 3x + 1$ shifted left by 2 gives $y =$ ___.", ["3x+7", "3x + 7"]));
  q.push(fill("easy", "$y = \\frac{1}{2}x - 3$ reflected across the y-axis gives $y =$ ___.", ["-1/2x-3", "-\\frac{1}{2}x-3", "-\\frac{1}{2}x - 3", "-0.5x-3"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "$y = 2x + 5$ is vertically stretched by factor 3 then shifted down by 4. The new equation is:", ["$y = 6x + 11$", "$y = 6x + 1$", "$y = 6x + 15$", "$y = 2x + 1$"], 0, "$3(2x+5) - 4 = 6x + 11$."));
  q.push(mc("medium", "Reflecting $y = \\frac{2}{3}x - 1$ across the x-axis then shifting up by 2 gives:", ["$y = -\\frac{2}{3}x + 3$", "$y = \\frac{2}{3}x + 1$", "$y = -\\frac{2}{3}x - 3$", "$y = -\\frac{2}{3}x + 1$"], 0, "$-(\\frac{2}{3}x - 1) + 2 = -\\frac{2}{3}x + 3$."));
  q.push(mc("medium", "$y = 4x - 3$ is shifted right by 2 then stretched vertically by factor 2. The new equation is:", ["$y = 4(2x - 2) - 3$", "$y = 2(4(x - 2) - 3)$", "$y = 8x - 22$", "Both $2(4(x-2)-3)$ and $8x - 22$"], 3, "$2(4x - 8 - 3) = 8x - 22$."));
  q.push(mc("medium", "Which transformation changes $y = 3x + 2$ to $y = -3x + 2$?", ["Reflection across the x-axis", "Reflection across the y-axis", "Vertical stretch by 2", "Shift left"], 1, "Replacing $x$ with $-x$ flips the slope's sign but keeps the y-intercept."));
  q.push(mc("medium", "The line $y = -2x + 7$ is transformed to $y = -2x - 3$. This is a:", ["Shift down by 10", "Shift up by 10", "Shift left by 10", "Reflection"], 0, "$7 \\to -3$ is a decrease of 10."));
  // multiple select
  q.push(ms("medium", "Which single transformation changes $y = x + 2$ to $y = -x - 2$?", ["Reflect across the x-axis", "Reflect across the y-axis", "Reflect across the origin", "Reflect across the y-axis, then shift down by 4"], [0, 3], "Reflect-x gives $-x-2$; reflect-y gives $-x+2$; reflect-origin gives $x-2$; reflect-y then down 4 gives $-x-2$."));
  q.push(ms("medium", "$y = 2x + 1$ is shifted left by 3 and up by 4. Which equations represent the new line?", ["$y = 2(x + 3) + 1 + 4$", "$y = 2x + 11$", "$y = 2x + 6 + 1 + 4$", "$y = 2x + 9$"], [0, 1, 2]));
  q.push(ms("medium", "Which transformations preserve the y-intercept of a line?", ["Horizontal shift", "Vertical shift", "Reflection across the x-axis", "Reflection across the y-axis"], [3], "Only reflection across the y-axis leaves the y-intercept unchanged."));
  q.push(ms("medium", "A line with slope $m$ and y-intercept $b$ is vertically stretched by factor $k$. The new line has:", ["Slope $km$", "y-intercept $kb$", "Slope $m$", "y-intercept $b$"], [0, 1]));
  q.push(ms("medium", "$y = \\frac{1}{3}x - 2$ is reflected across the y-axis then shifted up by 5. Which are true?", ["$y = -\\frac{1}{3}x + 3$", "$y = -\\frac{1}{3}x - 2 + 5$", "Slope is $-\\frac{1}{3}$", "y-intercept is 3"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "Shifting a line left changes its y-intercept.", true, "e.g. $y = x + 2 \\to y = x + 5$ (shift left 3)."));
  q.push(tf("medium", "Reflecting a line across the y-axis changes the sign of its slope.", true));
  q.push(tf("medium", "A vertical stretch of factor 2 changes $y = 3x - 4$ to $y = 6x - 8$.", true));
  q.push(tf("medium", "Shifting up by 3 then reflecting across the x-axis gives the same result as reflecting first then shifting down by 3.", true, "Both give $-f(x) - 3$."));
  q.push(tf("medium", "$y = 2x + 1$ and $y = 2x - 3$ are parallel, so one is a vertical shift of the other.", true));
  // fill in the blank
  q.push(fill("medium", "$y = 5x - 2$ shifted left by 3 and up by 2 gives $y =$ ___.", ["5x+15", "5x + 15"]));
  q.push(fill("medium", "Reflecting $y = -3x + 6$ across the x-axis gives $y =$ ___.", ["3x-6", "3x - 6"]));
  q.push(fill("medium", "A vertical stretch of factor 4 applied to $y = \\frac{1}{2}x + 3$ gives $y =$ ___.", ["2x+12", "2x + 12"]));
  q.push(fill("medium", "$y = x - 7$ shifted right by 5 gives $y =$ ___.", ["x-12", "x - 12"]));
  q.push(fill("medium", "Reflecting $y = 4x - 1$ across the y-axis gives $y =$ ___.", ["-4x-1", "-4x - 1"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "$y = 2x - 3$ is reflected across the x-axis, then shifted right by 4, then stretched vertically by factor 3. The new equation is:", ["$y = -6x + 33$", "$y = -6x + 15$", "$y = 6x - 33$", "$y = -6x - 15$"], 0, "Reflect $\\to -2x+3$; right 4 $\\to -2x+11$; stretch 3 $\\to -6x+33$."));
  q.push(mc("hard", "$y = \\frac{3}{4}x + 2$ is transformed to $y = -\\frac{3}{4}x - 2$. This could be achieved by:", ["Reflect across the x-axis", "Reflect across the y-axis, then shift down by 4", "Reflect across the origin", "Both A and B"], 3, "Reflect-x $= -\\frac{3}{4}x-2$; reflect-y then down 4 $= -\\frac{3}{4}x-2$. Both work."));
  q.push(mc("hard", "A line through $(2,5)$ and $(6,13)$ is shifted left by 3 and up by 2. The new line passes through:", ["$(-1,7)$ and $(3,15)$", "$(5,7)$ and $(9,15)$", "$(-1,3)$ and $(3,11)$", "$(5,3)$ and $(9,11)$"], 0, "Subtract 3 from x, add 2 to y."));
  q.push(mc("hard", "$y = 4x + 1$ is shifted right by $h$ then vertically stretched by factor $k$ to give $y = 8x - 6$. Find $k$ and $h$.", ["$k = 2, h = 1$", "$k = 2, h = -1$", "$k = 4, h = 2$", "$k = 2, h = 2$"], 0, "$k(4(x-h)+1) = 4kx - 4kh + k$; $4k = 8 \\Rightarrow k = 2$; $-8h + 2 = -6 \\Rightarrow h = 1$."));
  q.push(mc("hard", "Line 1: $y = \\frac{2}{3}x - 1$. Line 2 is Line 1 reflected across the x-axis then shifted up by 3. The slope of Line 2 is:", ["$-\\frac{2}{3}$", "$\\frac{2}{3}$", "$-\\frac{3}{2}$", "$\\frac{3}{2}$"], 0, "Reflection negates the slope; the shift does not change it."));
  // multiple select
  q.push(ms("hard", "Which sequences transform $y = x$ to $y = -2x + 6$?", ["Reflect across x-axis, stretch by factor 2, shift up 6", "Stretch by factor $-2$, shift up 6", "Reflect across y-axis, stretch by factor 2, shift up 6", "Shift up 6, reflect across x-axis, stretch by factor 2"], [0, 1, 2], "D gives $-2x - 12$."));
  q.push(ms("hard", "A line $y = mx + b$ is shifted right by $r$ and up by $u$. The new line has:", ["Slope $m$", "y-intercept $b - mr + u$", "y-intercept $b + mr + u$", "The same slope"], [0, 1, 3], "$y = m(x-r) + b + u = mx + (b - mr + u)$."));
  q.push(ms("hard", "Which transformations change $y = 2x + 3$ to $y = -2x - 3$?", ["Reflect across the x-axis", "Reflect across the y-axis, then shift down by 6", "Reflect across the origin", "Vertical stretch by factor $-1$"], [0, 1, 3], "Reflect-x $= -2x-3$; reflect-y then down 6 $= -2x-3$; stretch by $-1$ $= -2x-3$. Reflect-origin gives $2x-3$."));
  q.push(mc("hard", "A line is reflected across the y-axis, then shifted left by 3, then vertically stretched by factor 2, giving $y = -6x - 2$. The original line is:", ["$y = 3x + 8$", "$y = 3x - 4$", "$y = 3x + 5$", "$y = -3x + 4$"], 0, "Original $3x+8 \\to -3x+8 \\to -3x-1 \\to -6x-2$."));
  q.push(mc("hard", "$y = 5x - 2$ is reflected across the x-axis, then shifted right by 3, then reflected across the y-axis. The final equation is:", ["$y = 5x + 13$", "$y = -5x + 13$", "$y = 5x + 17$", "$y = -5x - 17$"], 2, "Reflect-x $\\to -5x+2$; right 3 $\\to -5x+17$; reflect-y $\\to 5x+17$."));
  // true / false
  q.push(tf("hard", "A vertical stretch changes both the slope and the y-intercept (when $b \\neq 0$).", true));
  q.push(tf("hard", "Reflecting a line across the origin is the same as reflecting across both axes in turn.", true));
  q.push(tf("hard", "Shifting a line right by $h$ changes the y-intercept by $-mh$.", true, "$y = mx + b \\to m(x-h)+b = mx + (b - mh)$."));
  q.push(tf("hard", "The order of transformations never affects the final equation.", false, "Order matters (e.g. shift vs stretch)."));
  q.push(tf("hard", "Any line can be transformed into any other line using only shifts and stretches.", false, "Sign of slope needs a reflection."));
  // fill in the blank
  q.push(fill("hard", "$y = 3x - 4$ shifted right by 2 and up by 5 gives $y =$ ___.", ["3x-5", "3x - 5"]));
  q.push(fill("hard", "Reflecting $y = -2x + 7$ across the x-axis then stretching vertically by 2 gives $y =$ ___.", ["4x-14", "4x - 14"]));
  q.push(fill("hard", "$y = x + 3$ reflected across the y-axis then shifted down by 4 gives $y =$ ___.", ["-x-1", "-x - 1"]));
  q.push(fill("hard", "A vertical stretch of factor 3 then a shift up by 2 changes $y = \\frac{1}{3}x - 5$ to $y =$ ___.", ["x-13", "x - 13"]));
  q.push(num("hard", "The transformation changing $y = 2x$ to $y = -2x + 8$ is: reflect across the y-axis, then shift up by ___.", 8, 0));

  return q;
}

// ── 4.6 Finding the Equation of a Line ───────────────────────
export function gen46() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Find the equation of a line with slope $3$ and y-intercept $-2$.", ["$y = 3x - 2$", "$y = -2x + 3$", "$y = 3x + 2$", "$y = -3x - 2$"], 0));
  q.push(mc("easy", "Find the equation of a line with slope $-\\frac{1}{2}$ and y-intercept $5$.", ["$y = -\\frac{1}{2}x + 5$", "$y = \\frac{1}{2}x - 5$", "$y = -5x + \\frac{1}{2}$", "$y = -\\frac{1}{2}x - 5$"], 0));
  q.push(mc("easy", "A line passes through $(0,4)$ with slope $-3$. Its equation is:", ["$y = -3x + 4$", "$y = 3x + 4$", "$y = -3x - 4$", "$y = 4x - 3$"], 0));
  q.push(mc("easy", "The equation of a horizontal line through $(3,-7)$ is:", ["$y = -7$", "$x = 3$", "$y = 3$", "$x = -7$"], 0));
  q.push(mc("easy", "The equation of a vertical line through $(-2,5)$ is:", ["$x = -2$", "$y = 5$", "$x = 5$", "$y = -2$"], 0));
  // multiple select
  q.push(ms("easy", "Which equations represent a line with slope $2$ through $(0,3)$?", ["$y = 2x + 3$", "$y = 2x - 3$", "$y - 3 = 2x$", "$y = 3x + 2$"], [0, 2]));
  q.push(ms("easy", "A line passes through $(0,-1)$ and $(2,3)$. Which are true?", ["Slope is $2$", "Equation is $y = 2x - 1$", "y-intercept is $-1$", "Equation is $y = -2x + 1$"], [0, 1, 2]));
  q.push(ms("easy", "Which equations represent a line with slope $-4$ and y-intercept $2$?", ["$y = -4x + 2$", "$y = 2 - 4x$", "$y + 4x = 2$", "$4x + y = 2$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which points lie on the line $y = 3x - 2$?", ["$(1,1)$", "$(2,4)$", "$(0,-2)$", "$(-1,-5)$"], [0, 1, 2, 3]));
  q.push(ms("easy", "A line has slope $0$ and passes through $(4,-3)$. Which are true?", ["Equation is $y = -3$", "It is horizontal", "Equation is $x = 4$", "It is vertical"], [0, 1]));
  // true / false
  q.push(tf("easy", "The line with slope $5$ and y-intercept $-1$ is $y = 5x - 1$.", true));
  q.push(tf("easy", "A line through $(0,2)$ with slope $0$ is $y = 2$.", true));
  q.push(tf("easy", "A vertical line through $(3, -4)$ has equation $y = -4$.", false, "It is $x = 3$."));
  q.push(tf("easy", "The line $y = 2x + 3$ has slope $3$.", false, "The slope is $2$."));
  q.push(tf("easy", "Two points are enough to find the equation of a line.", true));
  // fill in the blank
  q.push(fill("easy", "The line with slope $4$ and y-intercept $-3$ is $y =$ ___.", ["4x-3", "4x - 3"]));
  q.push(fill("easy", "A line through $(0,6)$ with slope $-\\frac{2}{3}$ is $y =$ ___.", ["-2/3x+6", "-\\frac{2}{3}x+6", "-\\frac{2}{3}x + 6"]));
  q.push(num("easy", "A horizontal line through $(5,-2)$ has equation $y =$ ___.", -2, 0));
  q.push(num("easy", "A vertical line through $(-3,7)$ has equation $x =$ ___.", -3, 0));
  q.push(num("easy", "The slope of $y = 6x - 5$ is ___.", 6, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Find the line with slope $\\frac{3}{4}$ through $(8,2)$.", ["$y = \\frac{3}{4}x - 4$", "$y = \\frac{3}{4}x + 4$", "$y = \\frac{3}{4}x - 8$", "$y = \\frac{3}{4}x + 8$"], 0, "$2 = \\frac{3}{4}(8) + b \\Rightarrow b = -4$."));
  q.push(mc("medium", "A line passes through $(2,5)$ and $(4,11)$. Its equation is:", ["$y = 3x - 1$", "$y = 3x + 1$", "$y = 2x + 1$", "$y = 2x - 1$"], 0, "Slope $3$; $b = -1$."));
  q.push(mc("medium", "Find the line parallel to $y = 4x - 2$ through $(1,3)$.", ["$y = 4x - 1$", "$y = 4x + 1$", "$y = 4x - 7$", "$y = -4x + 7$"], 0, "Slope $4$; $3 = 4(1)+b \\Rightarrow b = -1$."));
  q.push(mc("medium", "Find the line perpendicular to $y = 2x + 5$ through $(0,-3)$.", ["$y = -\\frac{1}{2}x - 3$", "$y = \\frac{1}{2}x - 3$", "$y = -2x - 3$", "$y = -\\frac{1}{2}x + 3$"], 0, "Perpendicular slope $-\\frac{1}{2}$, y-intercept $-3$."));
  q.push(mc("medium", "A line has x-intercept $4$ and y-intercept $3$. Its equation is:", ["$y = -\\frac{3}{4}x + 3$", "$y = \\frac{3}{4}x + 3$", "$y = -\\frac{4}{3}x + 3$", "$y = \\frac{4}{3}x + 3$"], 0, "Slope $\\frac{0-3}{4-0} = -\\frac{3}{4}$."));
  // multiple select
  q.push(ms("medium", "Which lines pass through $(2,7)$?", ["$y = 3x + 1$", "$y = 2x + 3$", "$y = 4x - 1$", "$y = -x + 9$"], [0, 1, 2, 3], "All four give $7$ at $x = 2$."));
  q.push(ms("medium", "A line passes through $(1,4)$ and $(3,10)$. Which are true?", ["Slope is $3$", "Equation is $y = 3x + 1$", "y-intercept is $1$", "Equation is $y - 4 = 3(x - 1)$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which lines are parallel to $y = \\frac{2}{3}x + 5$?", ["$y = \\frac{2}{3}x - 1$", "$y - \\frac{2x}{3} = 7$", "$y = \\frac{4}{6}x + 3$", "$y = -\\frac{3}{2}x + 2$"], [0, 1, 2], "$\\frac{4}{6} = \\frac{2}{3}$."));
  q.push(ms("medium", "Which lines are perpendicular to $y = 3x - 2$?", ["$y = -\\frac{1}{3}x + 4$", "$y = \\frac{1}{3}x - 5$", "$y = -3x + 1$", "$y = -\\frac{1}{3}x + 2$"], [0, 3]));
  q.push(ms("medium", "A line has equation $2x - 3y = 6$. Which are correct?", ["Slope is $\\frac{2}{3}$", "y-intercept is $-2$", "x-intercept is $3$", "In slope-intercept form it is $y = \\frac{2}{3}x - 2$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "The line through $(0,5)$ with slope $-2$ is $y = -2x + 5$.", true));
  q.push(tf("medium", "The line through $(3,1)$ and $(6,7)$ is $y = 2x - 5$.", true, "Slope $2$; $1 = 2(3)+b \\Rightarrow b = -5$."));
  q.push(tf("medium", "The line perpendicular to $y = -3x + 2$ has slope $3$.", false, "It is $\\frac{1}{3}$."));
  q.push(tf("medium", "Horizontal lines have equation $x = c$.", false, "They have the form $y = c$."));
  q.push(tf("medium", "The lines $y = 4x + 3$ and $y = 4x - 2$ are parallel.", true));
  // fill in the blank
  q.push(fill("medium", "A line through $(0,7)$ with slope $-5$ is $y =$ ___.", ["-5x+7", "-5x + 7"]));
  q.push(fill("medium", "The line through $(2,9)$ and $(4,15)$ is $y =$ ___.", ["3x+3", "3x + 3"]));
  q.push(fill("medium", "A line parallel to $y = 6x + 1$ through $(0,-4)$ is $y =$ ___.", ["6x-4", "6x - 4"]));
  q.push(fill("medium", "A line perpendicular to $y = -\\frac{1}{2}x + 3$ through $(0,5)$ is $y =$ ___.", ["2x+5", "2x + 5"]));
  q.push(fill("medium", "The slope of $3x + 4y = 12$ is ___.", ["-3/4", "-\\frac{3}{4}"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A line passes through $(3,-2)$ and $(-1,6)$. Its equation is:", ["$y = -2x + 4$", "$y = 2x - 8$", "$y = -2x - 4$", "$y = 2x + 4$"], 0, "Slope $\\frac{8}{-4} = -2$; $-2 = -2(3)+b \\Rightarrow b = 4$."));
  q.push(mc("hard", "A line has slope $-\\frac{3}{5}$ through $(10,-1)$. In standard form $Ax + By = C$ it is:", ["$3x + 5y = 25$", "$3x + 5y = -25$", "$-3x + 5y = 25$", "$3x - 5y = 25$"], 0, "$5y + 5 = -3x + 30 \\Rightarrow 3x + 5y = 25$."));
  q.push(mc("hard", "Find the line parallel to $2x - 5y = 10$ through $(-5,2)$.", ["$2x - 5y = -20$", "$2x - 5y = 20$", "$-2x + 5y = 20$", "$2x + 5y = -20$"], 0, "Slope $\\frac{2}{5}$; gives $2x - 5y = -20$."));
  q.push(mc("hard", "A line is perpendicular to $y = 3x + 2$ and has the same y-intercept as $y = -2x + 5$. Its equation is:", ["$y = -\\frac{1}{3}x + 5$", "$y = \\frac{1}{3}x + 5$", "$y = -\\frac{1}{3}x + 2$", "$y = \\frac{1}{3}x + 2$"], 0, "Perpendicular slope $-\\frac{1}{3}$, y-intercept $5$."));
  q.push(mc("hard", "A line through $(1,2)$ is perpendicular to the line through $(0,0)$ and $(3,4)$. Its equation is:", ["$y = -\\frac{3}{4}x + \\frac{11}{4}$", "$y = -\\frac{3}{4}x + \\frac{5}{4}$", "$y = \\frac{3}{4}x + \\frac{5}{4}$", "$y = \\frac{4}{3}x + \\frac{2}{3}$"], 0, "Given slope $\\frac{4}{3}$; perpendicular $-\\frac{3}{4}$; $2 = -\\frac{3}{4}(1)+b \\Rightarrow b = \\frac{11}{4}$."));
  // multiple select
  q.push(ms("hard", "A line has equation $4x - 2y = 8$. Which are true?", ["Slope is $2$", "y-intercept is $-4$", "x-intercept is $2$", "It is parallel to $y = 2x + 5$"], [0, 1, 2, 3], "$y = 2x - 4$."));
  q.push(ms("hard", "A line passes through $(2,-3)$ and $(6,5)$. Which represent it?", ["$y = 2x - 7$", "$y + 3 = 2(x - 2)$", "$2x - y = 7$", "$y = 2x + 7$"], [0, 1, 2], "Slope $2$; $y = 2x - 7$."));
  q.push(ms("hard", "Which lines are perpendicular to $2x + 3y = 6$?", ["$y = \\frac{3}{2}x - 4$", "$y = -\\frac{2}{3}x + 1$", "$3x - 2y = 5$", "$y = \\frac{3}{2}x + 7$"], [0, 2, 3], "Given slope $-\\frac{2}{3}$; perpendicular $\\frac{3}{2}$."));
  q.push(ms("hard", "A line has x-intercept $-3$ and y-intercept $6$. Which are correct?", ["Slope is $2$", "Equation is $y = 2x + 6$", "Equation is $y = -2x + 6$", "Passes through $(1,8)$"], [0, 1, 3], "Slope $\\frac{6}{3} = 2$; $y = 2x + 6$."));
  q.push(ms("hard", "Find the line through $(4,1)$ parallel to the line through $(1,3)$ and $(3,7)$. Which are correct?", ["Slope is $2$", "Equation is $y = 2x - 7$", "Equation is $y = 2x + 7$", "Passes through $(2,-3)$"], [0, 1, 3], "Slope $2$; $1 = 2(4)+b \\Rightarrow b = -7$."));
  // true / false
  q.push(tf("hard", "The line with slope $-\\frac{2}{3}$ through $(6,-1)$ is $y = -\\frac{2}{3}x + 3$.", true, "$-1 = -4 + b \\Rightarrow b = 3$."));
  q.push(tf("hard", "The line through $(2,5)$ and $(-1,2)$ is $y = x + 3$.", true, "Slope $1$; $b = 3$."));
  q.push(tf("hard", "Lines with slopes $3$ and $-\\frac{1}{3}$ are perpendicular.", true, "Product $= -1$."));
  q.push(tf("hard", "The equation of a vertical line can be written in slope-intercept form.", false, "Its slope is undefined."));
  q.push(tf("hard", "The lines $y = 4x - 3$ and $y = 4x + 7$ are parallel and distinct.", true));
  // fill in the blank
  q.push(fill("hard", "The line through $(3,4)$ and $(5,10)$ is $y =$ ___.", ["3x-5", "3x - 5"]));
  q.push(fill("hard", "A line perpendicular to $y = \\frac{5}{2}x - 1$ through $(0,3)$ is $y =$ ___.", ["-2/5x+3", "-\\frac{2}{5}x+3", "-\\frac{2}{5}x + 3"]));
  q.push(fill("hard", "The standard form of the line with slope $-\\frac{3}{4}$ through $(8,-2)$ is ___ (as $Ax+By=C$).", ["3x+4y=16", "3x + 4y = 16"]));
  q.push(num("hard", "A line parallel to $x - 2y = 6$ through $(4,-1)$ has $x - 2y =$ ___.", 6, 0));
  q.push(fill("hard", "The line with x-intercept $5$ and y-intercept $-2$ is $y =$ ___.", ["2/5x-2", "\\frac{2}{5}x-2", "\\frac{2}{5}x - 2"]));

  return q;
}

// ── 4.7 General Form of a Line ───────────────────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen47() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "The general form of a linear equation is:", ["$y = mx + b$", "$Ax + By + C = 0$", "$y - y_1 = m(x - x_1)$", "$x = a$"], 1));
  q.push(mc("easy", "Which equation is in general form?", ["$y = 3x - 2$", "$2x + 3y - 6 = 0$", "$y = -x + 5$", "$y - 2 = 4(x - 1)$"], 1));
  q.push(mc("easy", "The slope of the line $2x + 3y - 6 = 0$ is:", ["$\\frac{2}{3}$", "$-\\frac{2}{3}$", "$-\\frac{3}{2}$", "$2$"], 1, "$3y = -2x + 6 \\Rightarrow y = -\\frac{2}{3}x + 2$."));
  q.push(mc("easy", "The y-intercept of $4x - 2y + 8 = 0$ is:", ["$4$", "$-4$", "$2$", "$8$"], 0, "$-2y = -4x - 8 \\Rightarrow y = 2x + 4$."));
  q.push(mc("easy", "The x-intercept of $3x + 4y - 12 = 0$ is:", ["$3$", "$4$", "$-4$", "$12$"], 1, "Set $y=0$: $3x - 12 = 0 \\Rightarrow x = 4$."));
  q.push(ms("easy", "Which are in general form?", ["$2x - 5y + 3 = 0$", "$-x + 4y - 7 = 0$", "$y = 2x + 1$", "$3x + 2y - 4 = 0$"], [0, 1, 3]));
  q.push(ms("easy", "Which lines have slope $-\\frac{1}{2}$?", ["$x + 2y - 4 = 0$", "$2x + 4y - 8 = 0$", "$-x - 2y + 6 = 0$", "$x - 2y + 3 = 0$"], [0, 1, 2], "D gives $y = \\frac{1}{2}x + \\frac{3}{2}$."));
  q.push(ms("easy", "Which lines have y-intercept $3$?", ["$2x + y - 3 = 0$", "$x - 3y + 9 = 0$", "$4x - y + 3 = 0$", "$y = 3$"], [0, 1, 2, 3], "All four give $y = (\\ldots)x + 3$."));
  q.push(mc("easy", "The x-intercept of $2x - 3y - 6 = 0$ is:", ["$3$", "$-3$", "$2$", "$6$"], 0, "Set $y=0$: $2x - 6 = 0 \\Rightarrow x = 3$."));
  q.push(mc("easy", "Converting $y = 3x - 2$ to general form gives:", ["$3x - y - 2 = 0$", "$3x + y - 2 = 0$", "$x - 3y - 2 = 0$", "$3x - y + 2 = 0$"], 0));
  q.push(tf("easy", "The general form of a line is $Ax + By + C = 0$.", true));
  q.push(tf("easy", "The slope of $3x + 4y - 12 = 0$ is $-\\frac{3}{4}$.", true));
  q.push(tf("easy", "The y-intercept of $2x - y + 5 = 0$ is $5$.", true, "$-y = -2x - 5 \\Rightarrow y = 2x + 5$."));
  q.push(tf("easy", "The x-intercept of $5x - 10 = 0$ is $2$.", true, "$5x = 10 \\Rightarrow x = 2$."));
  q.push(tf("easy", "$y = mx + b$ is the general form.", false, "That is slope-intercept form."));
  q.push(fill("easy", "Convert $y = 2x + 3$ to general form: ___.", ["2x-y+3=0", "2x - y + 3 = 0"]));
  q.push(num("easy", "The slope of $4x - 2y + 6 = 0$ is ___.", 2, 0));
  q.push(num("easy", "The y-intercept of $3x + y - 4 = 0$ is ___.", 4, 0));
  q.push(num("easy", "The x-intercept of $2x + 5y - 10 = 0$ is ___.", 5, 0));
  q.push(fill("easy", "In general form $Ax + By + C = 0$, the slope is ___.", ["-A/B", "-\\frac{A}{B}", "-a/b"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "A line has equation $3x - 4y + 12 = 0$. Its slope and y-intercept are:", ["$m = \\frac{3}{4},\\ b = 3$", "$m = \\frac{3}{4},\\ b = -3$", "$m = -\\frac{3}{4},\\ b = 3$", "$m = \\frac{4}{3},\\ b = -3$"], 0, "$-4y = -3x - 12 \\Rightarrow y = \\frac{3}{4}x + 3$."));
  q.push(mc("medium", "A line has equation $2x - y - 1 = 0$. Does it pass through $(3,4)$?", ["Yes", "No", "Cannot determine", "Only if parallel"], 1, "$2(3) - 4 - 1 = 1 \\neq 0$."));
  q.push(mc("medium", "The equation of a line with slope $-2$ and y-intercept $5$ in general form is:", ["$2x + y - 5 = 0$", "$2x - y + 5 = 0$", "$-2x + y - 5 = 0$", "$x + 2y - 5 = 0$"], 0, "$y = -2x + 5 \\Rightarrow 2x + y - 5 = 0$."));
  q.push(mc("medium", "Which line is parallel to $3x - 2y + 4 = 0$?", ["$3x - 2y + 8 = 0$", "$6x - 4y + 4 = 0$", "$3x + 2y + 4 = 0$", "Both $3x - 2y + 8 = 0$ and $6x - 4y + 4 = 0$"], 3, "Both have slope $\\frac{3}{2}$."));
  q.push(mc("medium", "Which line is perpendicular to $2x + 3y - 6 = 0$?", ["$3x - 2y + 5 = 0$", "$3x + 2y + 4 = 0$", "$-2x + 3y + 1 = 0$", "$4x + 6y - 12 = 0$"], 0, "Given slope $-\\frac{2}{3}$; perpendicular slope $\\frac{3}{2}$, which $3x - 2y + 5 = 0$ has."));
  q.push(ms("medium", "Which equations represent the same line as $2x - 3y + 6 = 0$?", ["$-2x + 3y - 6 = 0$", "$4x - 6y + 12 = 0$", "$y = \\frac{2}{3}x + 2$", "$y = \\frac{2}{3}x - 2$"], [0, 1, 2], "A is $\\times(-1)$, B is $\\times 2$, C is the slope form."));
  q.push(ms("medium", "Which statements about $4x + 2y - 8 = 0$ are true?", ["Slope $= -2$", "y-intercept $= 4$", "x-intercept $= 2$", "Passes through $(1,2)$"], [0, 1, 2, 3], "$y = -2x + 4$."));
  q.push(ms("medium", "A line has x-intercept $a$ and y-intercept $b$. Its general form is:", ["$\\frac{x}{a} + \\frac{y}{b} = 1$", "$bx + ay = ab$", "$bx + ay - ab = 0$", "$\\frac{x}{a} + \\frac{y}{b} - 1 = 0$"], [0, 1, 2, 3]));
  q.push(mc("medium", "A line is perpendicular to $3x + 4y - 12 = 0$ and passes through $(0,5)$. Its equation is:", ["$4x - 3y + 15 = 0$", "$4x - 3y - 15 = 0$", "$3x + 4y - 20 = 0$", "$3x - 4y + 15 = 0$"], 0, "Perp slope $\\frac{4}{3}$; $y = \\frac{4}{3}x + 5 \\Rightarrow 4x - 3y + 15 = 0$."));
  q.push(mc("medium", "A line is parallel to $2x + 3y - 5 = 0$ and passes through $(1,-2)$. Its equation is:", ["$2x + 3y + 4 = 0$", "$2x + 3y - 4 = 0$", "$3x - 2y + 4 = 0$", "$2x + 3y - 8 = 0$"], 0, "$2(1) + 3(-2) + C = 0 \\Rightarrow C = 4$."));
  q.push(tf("medium", "The slope of $Ax + By + C = 0$ is $-\\frac{A}{B}$.", true));
  q.push(tf("medium", "The y-intercept of $Ax + By + C = 0$ is $-\\frac{C}{B}$.", true));
  q.push(tf("medium", "The x-intercept of $Ax + By + C = 0$ is $-\\frac{C}{A}$.", true));
  q.push(tf("medium", "Any line can be written in the form $Ax + By + C = 0$.", true));
  q.push(tf("medium", "Parallel lines in general form have proportional $A$ and $B$ coefficients.", true));
  q.push(fill("medium", "The slope of $5x - 2y + 10 = 0$ is ___.", ["5/2", "\\frac{5}{2}", "2.5"]));
  q.push(num("medium", "The y-intercept of $3x + 4y - 8 = 0$ is ___.", 2, 0));
  q.push(num("medium", "The x-intercept of $2x - 3y - 12 = 0$ is ___.", 6, 0));
  q.push(fill("medium", "The equation $y = -3x + 7$ in general form is ___.", ["3x+y-7=0", "3x + y - 7 = 0"]));
  q.push(fill("medium", "A line has x-intercept $4$ and y-intercept $-3$. Its general form ($A>0$) is ___.", ["3x-4y-12=0", "3x - 4y - 12 = 0"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A line passes through $(2,-1)$ and is perpendicular to $4x - 2y + 6 = 0$. Its general form is:", ["$x + 2y = 0$", "$x - 2y = 0$", "$2x + y - 3 = 0$", "$x + 2y - 4 = 0$"], 0, "Given slope $2$; perp $-\\frac{1}{2}$; $y + 1 = -\\frac{1}{2}(x - 2) \\Rightarrow x + 2y = 0$."));
  q.push(mc("hard", "The line $3x + 4y - 12 = 0$ is shifted up by $3$ units. The new general form is:", ["$3x + 4y - 24 = 0$", "$3x + 4y - 3 = 0$", "$3x + 4y - 12 = 0$", "$3x + 4y = 0$"], 0, "Replace $y$ with $y - 3$: $3x + 4(y-3) - 12 = 0 \\Rightarrow 3x + 4y - 24 = 0$."));
  q.push(mc("hard", "The distance from the origin to the line $3x + 4y - 10 = 0$ is:", ["$2$", "$1$", "$10$", "$5$"], 0, "$\\frac{|C|}{\\sqrt{A^2+B^2}} = \\frac{10}{5} = 2$."));
  q.push(mc("hard", "A line passes through $(1,1)$ and $(2,3)$. A valid ratio $A : B : C$ for its general form is:", ["$2 : -1 : -1$", "$2 : 1 : -1$", "$2 : 1 : -3$", "$1 : -1 : -1$"], 0, "Slope $2$; $y = 2x - 1 \\Rightarrow 2x - y - 1 = 0$."));
  q.push(mc("hard", "The intersection of $2x + y - 3 = 0$ and $x - 2y + 1 = 0$ is:", ["$(1,1)$", "$(1,0)$", "$(0,3)$", "$(2,-1)$"], 0, "$y = 3 - 2x$; $x - 2(3-2x) + 1 = 0 \\Rightarrow 5x - 5 = 0 \\Rightarrow x = 1, y = 1$."));
  q.push(ms("hard", "Which lines have the same x-intercept as $3x - 4y + 12 = 0$?", ["$3x - 4y + 24 = 0$", "$6x - 8y + 24 = 0$", "$3x - 4y - 12 = 0$", "$x - \\frac{4}{3}y + 4 = 0$"], [1, 3], "The x-intercept is $-4$; B and D also give $x = -4$."));
  q.push(ms("hard", "The line $2x - 3y + 6 = 0$ is reflected across the y-axis. The new equation is:", ["$-2x - 3y + 6 = 0$", "$2x + 3y + 6 = 0$", "$-2x + 3y + 6 = 0$", "$2x + 3y - 6 = 0$"], [0], "Replace $x$ with $-x$."));
  q.push(ms("hard", "Which lines are parallel to $Ax + By + C = 0$?", ["$Ax + By + D = 0$", "$kAx + kBy + D = 0$", "$Ax - By + C = 0$", "$-Ax - By + C = 0$"], [0, 1, 3], "Parallel ⇔ same $A:B$ ratio."));
  q.push(mc("hard", "The distance between the parallel lines $3x + 4y - 10 = 0$ and $3x + 4y + 20 = 0$ is:", ["$6$", "$10$", "$30$", "$2$"], 0, "$\\frac{|C_1 - C_2|}{\\sqrt{A^2+B^2}} = \\frac{30}{5} = 6$."));
  q.push(ms("hard", "The line $3x + 4y - 24 = 0$ is shifted left by $2$ and down by $3$. Which represent the new line?", ["$3x + 4y - 30 = 0$", "$3x + 4y - 18 = 0$", "$3(x+2) + 4(y+3) - 24 = 0$", "$3x + 4y - 6 = 0$"], [2, 3], "$x \\to x+2$, $y \\to y+3$ gives $3x + 4y - 6 = 0$; option C is the same, unsimplified."));
  q.push(tf("hard", "The general form of a line is unique up to multiplication by a non-zero constant.", true));
  q.push(tf("hard", "Lines $2x + 3y - 5 = 0$ and $4x + 6y - 10 = 0$ represent the same line.", true));
  q.push(tf("hard", "The distance from $(x_1, y_1)$ to $Ax + By + C = 0$ is $\\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2+B^2}}$.", true));
  q.push(tf("hard", "A line $Ax + By + C = 0$ has slope $-\\frac{A}{B}$ and y-intercept $-\\frac{C}{B}$.", true));
  q.push(tf("hard", "Lines $2x + 3y - 4 = 0$ and $3x - 2y + 5 = 0$ are perpendicular.", true, "Slopes $-\\frac{2}{3}$ and $\\frac{3}{2}$; product $-1$."));
  q.push(fill("hard", "The line through $(1,-2)$ with slope $-\\frac{2}{3}$ in general form is ___.", ["2x+3y+4=0", "2x + 3y + 4 = 0"]));
  q.push(num("hard", "The x-intercept of $5x - 3y + 15 = 0$ is ___.", -3, 0));
  q.push(num("hard", "The distance between the parallel lines $4x - 3y + 10 = 0$ and $4x - 3y - 15 = 0$ is ___.", 5, 0));
  q.push(fill("hard", "A line has slope $2$ and passes through $(3,-1)$. Its general form is ___.", ["2x-y-7=0", "2x - y - 7 = 0"]));
  q.push(fill("hard", "The lines $2x + 3y - 6 = 0$ and $3x - 2y - 9 = 0$ intersect at ___.", ["(3,0)", "(3, 0)", "3,0"]));

  return q;
}

// ── 4.8 General Form vs Slope-Intercept Form ─────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen48() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "The slope-intercept form of a line is:", ["$Ax + By + C = 0$", "$y = mx + b$", "$y - y_1 = m(x - x_1)$", "$\\frac{x}{a} + \\frac{y}{b} = 1$"], 1));
  q.push(mc("easy", "Convert $y = 2x + 3$ to general form:", ["$2x - y + 3 = 0$", "$2x + y - 3 = 0$", "$-2x + y - 3 = 0$", "$2x - y - 3 = 0$"], 0));
  q.push(mc("easy", "Convert $3x - 4y + 12 = 0$ to slope-intercept form:", ["$y = \\frac{3}{4}x + 3$", "$y = -\\frac{3}{4}x + 3$", "$y = \\frac{3}{4}x - 3$", "$y = -\\frac{3}{4}x - 3$"], 0));
  q.push(mc("easy", "The slope of $y = -5x + 2$ is:", ["$-5$", "$2$", "$5$", "$-2$"], 0));
  q.push(mc("easy", "The y-intercept of $2x + 3y - 6 = 0$ is:", ["$2$", "$-2$", "$3$", "$-3$"], 0, "$3y = -2x + 6 \\Rightarrow y = -\\frac{2}{3}x + 2$."));
  q.push(ms("easy", "Which equations are in slope-intercept form?", ["$y = 3x - 5$", "$y = -\\frac{2}{3}x + 4$", "$2x + y - 3 = 0$", "$y = 7$"], [0, 1, 3]));
  q.push(ms("easy", "Which equations are in general form?", ["$3x - 2y + 5 = 0$", "$-x + 4y - 7 = 0$", "$y = 2x + 1$", "$x - 3y = 0$"], [0, 1, 3]));
  q.push(ms("easy", "Convert $y = -4x + 6$ to general form. Which are correct?", ["$4x + y - 6 = 0$", "$-4x - y + 6 = 0$", "$4x - y - 6 = 0$", "$4x + y + 6 = 0$"], [0, 1], "B is A multiplied by $-1$ (same line)."));
  q.push(ms("easy", "Convert $5x - 2y + 10 = 0$ to slope-intercept form. Which are correct?", ["$y = \\frac{5}{2}x + 5$", "$y = 2.5x + 5$", "$y = -\\frac{5}{2}x - 5$", "$y = 2.5x - 5$"], [0, 1]));
  q.push(ms("easy", "Which lines have slope $3$?", ["$y = 3x - 2$", "$3x - y + 5 = 0$", "$-3x + y - 4 = 0$", "$y = -3x + 1$"], [0, 1, 2], "B: $y = 3x + 5$; C: $y = 3x + 4$."));
  q.push(tf("easy", "$y = mx + b$ is the slope-intercept form.", true));
  q.push(tf("easy", "$Ax + By + C = 0$ is the general form.", true));
  q.push(tf("easy", "The slope of $3x + 4y - 12 = 0$ is $-\\frac{3}{4}$.", true));
  q.push(tf("easy", "The y-intercept of $y = 2x - 5$ is $-5$.", true));
  q.push(tf("easy", "The general form and slope-intercept form represent different lines.", false, "They represent the same line."));
  q.push(fill("easy", "Convert $y = 3x - 2$ to general form: ___.", ["3x-y-2=0", "3x - y - 2 = 0"]));
  q.push(fill("easy", "Convert $2x + 5y - 10 = 0$ to slope-intercept form: $y =$ ___.", ["-2/5x+2", "-\\frac{2}{5}x+2", "-0.4x+2", "-\\frac{2}{5}x + 2"]));
  q.push(num("easy", "The slope of $y = -7x + 4$ is ___.", -7, 0));
  q.push(num("easy", "The y-intercept of $4x - y + 3 = 0$ is ___.", 3, 0));
  q.push(fill("easy", "In general form $Ax + By + C = 0$, the slope is ___.", ["-A/B", "-\\frac{A}{B}", "-a/b"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "A line has equation $2x - 3y + 6 = 0$. Its slope and y-intercept are:", ["$m = \\frac{2}{3},\\ b = 2$", "$m = -\\frac{2}{3},\\ b = -2$", "$m = \\frac{3}{2},\\ b = 6$", "$m = -\\frac{3}{2},\\ b = -6$"], 0, "$-3y = -2x - 6 \\Rightarrow y = \\frac{2}{3}x + 2$."));
  q.push(mc("medium", "Which line has the same slope as $3x + 4y - 8 = 0$?", ["$3x + 4y + 5 = 0$", "$6x + 8y - 16 = 0$", "$y = -\\frac{3}{4}x + 2$", "All of the above"], 3, "All have slope $-\\frac{3}{4}$."));
  q.push(mc("medium", "Convert $y = -\\frac{2}{3}x + 5$ to general form:", ["$2x + 3y - 15 = 0$", "$2x - 3y + 15 = 0$", "$-2x + 3y - 15 = 0$", "$2x + 3y + 15 = 0$"], 0, "$3y = -2x + 15 \\Rightarrow 2x + 3y - 15 = 0$."));
  q.push(mc("medium", "A line has x-intercept $4$ and y-intercept $-2$. Its slope-intercept equation is:", ["$y = \\frac{1}{2}x - 2$", "$y = -\\frac{1}{2}x - 2$", "$y = 2x - 2$", "$y = -2x + 4$"], 0, "Slope $\\frac{-2-0}{0-4} = \\frac{1}{2}$; y-intercept $-2$."));
  q.push(mc("medium", "The line $2x - y + 3 = 0$ and $y = 2x + 3$ are:", ["The same line", "Parallel but distinct", "Perpendicular", "Intersecting at one point only"], 0, "$2x - y + 3 = 0 \\Rightarrow y = 2x + 3$."));
  q.push(ms("medium", "Which equations represent the same line as $y = 4x - 2$?", ["$4x - y - 2 = 0$", "$-4x + y + 2 = 0$", "$8x - 2y - 4 = 0$", "$y + 2 = 4x$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Convert $3x - 2y + 6 = 0$ to slope-intercept form. Which are correct?", ["$y = \\frac{3}{2}x + 3$", "$y = 1.5x + 3$", "$y = \\frac{3}{2}x - 3$", "$y = -\\frac{3}{2}x + 3$"], [0, 1], "$-2y = -3x - 6 \\Rightarrow y = \\frac{3}{2}x + 3$."));
  q.push(ms("medium", "A line has slope $-\\frac{1}{2}$ and passes through $(0,4)$. Which represent it?", ["$y = -\\frac{1}{2}x + 4$", "$x + 2y - 8 = 0$", "$y = -\\frac{1}{2}x - 4$", "$x + 2y + 8 = 0$"], [0, 1]));
  q.push(ms("medium", "Which lines are perpendicular to $2x + 3y - 5 = 0$?", ["$y = \\frac{3}{2}x + 1$", "$3x - 2y + 7 = 0$", "$y = -\\frac{2}{3}x + 4$", "$2x - 3y + 6 = 0$"], [0, 1], "Given slope $-\\frac{2}{3}$; perpendicular slope $\\frac{3}{2}$."));
  q.push(ms("medium", "Which are valid general forms of $y = 5$?", ["$y - 5 = 0$", "$0x + y - 5 = 0$", "$x - 5 = 0$", "$y = 5$"], [0, 1], "$x - 5 = 0$ is the vertical line $x=5$; $y = 5$ is not in general form."));
  q.push(tf("medium", "$y = mx + b$ can always be rewritten as $mx - y + b = 0$.", true, "$mx - y + b = 0 \\Rightarrow y = mx + b$."));
  q.push(tf("medium", "The slope of $Ax + By + C = 0$ is $-\\frac{A}{B}$.", true));
  q.push(tf("medium", "The y-intercept of $Ax + By + C = 0$ is $-\\frac{C}{B}$.", true));
  q.push(tf("medium", "Lines in general form are always written with integer coefficients.", false, "They can have fractions, though integers are preferred."));
  q.push(tf("medium", "The general form is the easier form for reading off the slope quickly.", false, "Slope-intercept form shows the slope directly."));
  q.push(fill("medium", "Convert $4x - 3y + 9 = 0$ to slope-intercept form: $y =$ ___.", ["4/3x+3", "\\frac{4}{3}x+3", "\\frac{4}{3}x + 3"]));
  q.push(fill("medium", "Convert $y = \\frac{5}{2}x - 3$ to general form (integers): ___.", ["5x-2y-6=0", "5x - 2y - 6 = 0"]));
  q.push(num("medium", "The slope of $y = -3x + 7$ (equivalently $3x + y - 7 = 0$) is ___.", -3, 0));
  q.push(num("medium", "The line $y = 2x - 5$ has general form $2x - y - 5 = 0$. Its y-intercept is ___.", -5, 0));
  q.push(fill("medium", "Convert $x + 2y - 6 = 0$ to slope-intercept form: $y =$ ___.", ["-1/2x+3", "-\\frac{1}{2}x+3", "-0.5x+3", "-\\frac{1}{2}x + 3"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "The line $3x - 4y + 12 = 0$ is shifted up by $3$ units. The new general form is:", ["$3x - 4y + 24 = 0$", "$3x - 4y + 12 = 0$", "$3x - 4y - 12 = 0$", "$3x - 4y = 0$"], 0, "Replace $y$ with $y - 3$: $3x - 4(y-3) + 12 = 0 \\Rightarrow 3x - 4y + 24 = 0$."));
  q.push(mc("hard", "The line $2x + 3y - 6 = 0$ is reflected across the x-axis. The new slope-intercept equation is:", ["$y = \\frac{2}{3}x - 2$", "$y = -\\frac{2}{3}x - 2$", "$y = \\frac{2}{3}x + 2$", "$y = -\\frac{2}{3}x + 2$"], 0, "Original $y = -\\frac{2}{3}x + 2$; replace $y$ with $-y$: $y = \\frac{2}{3}x - 2$."));
  q.push(mc("hard", "A line passes through $(2,-1)$ and is perpendicular to $3x - 2y + 4 = 0$. Its general form is:", ["$2x + 3y - 1 = 0$", "$2x + 3y + 1 = 0$", "$2x - 3y - 7 = 0$", "$2x + 3y - 7 = 0$"], 0, "Given slope $\\frac{3}{2}$; perp $-\\frac{2}{3}$; $y+1 = -\\frac{2}{3}(x-2) \\Rightarrow 2x + 3y - 1 = 0$."));
  q.push(mc("hard", "The lines $3x + 4y - 5 = 0$ and $6x + 8y + 10 = 0$ are:", ["Parallel", "Perpendicular", "The same line", "Intersecting at one point"], 0, "Second $\\div 2$: $3x + 4y + 5 = 0$ — same slope, different intercept."));
  q.push(mc("hard", "The distance between the parallel lines $3x + 4y - 10 = 0$ and $3x + 4y + 20 = 0$ is:", ["$6$", "$10$", "$30$", "$2$"], 0, "$\\frac{|C_1 - C_2|}{\\sqrt{A^2+B^2}} = \\frac{30}{5} = 6$."));
  q.push(ms("hard", "Which lines are perpendicular to $2x - 3y + 5 = 0$?", ["$3x + 2y - 7 = 0$", "$y = -\\frac{3}{2}x + 4$", "$y = \\frac{3}{2}x + 1$", "$-3x - 2y + 6 = 0$"], [0, 1, 3], "Given slope $\\frac{2}{3}$; perpendicular slope $-\\frac{3}{2}$."));
  q.push(mc("hard", "A line $y = 2x + 3$ is stretched vertically by factor $2$, then shifted left by $3$ units. Its new equation is:", ["$y = 4x + 18$", "$y = 4x + 6$", "$y = 4x + 12$", "$y = 2x + 9$"], 0, "Stretch: $y = 4x + 6$; shift left $3$: $y = 4(x+3) + 6 = 4x + 18$."));
  q.push(ms("hard", "Which statements comparing general and slope-intercept form are true?", ["Slope-intercept form shows slope and intercept directly", "General form gives a standard $Ax+By+C=0$ way to write any line", "General form can represent vertical lines; slope-intercept cannot", "Both forms can represent any non-vertical line"], [0, 1, 2, 3]));
  q.push(ms("hard", "A line has slope $m$ and passes through $(x_1, y_1)$. Which are valid general forms?", ["$mx - y + (y_1 - mx_1) = 0$", "$mx - y - mx_1 + y_1 = 0$", "$y - y_1 = m(x - x_1)$", "$-mx + y - (y_1 - mx_1) = 0$"], [0, 1, 3], "C is point-slope form, not general form."));
  q.push(mc("hard", "The line $3x + 4y - 24 = 0$ is rotated $90^\\circ$ about the origin. Its new slope is:", ["$\\frac{4}{3}$", "$-\\frac{4}{3}$", "$\\frac{3}{4}$", "$-\\frac{3}{4}$"], 0, "Original slope $-\\frac{3}{4}$; a $90^\\circ$ rotation gives the perpendicular slope $\\frac{4}{3}$."));
  q.push(tf("hard", "Every line can be written in both slope-intercept and general form.", false, "Vertical lines cannot be written in slope-intercept form."));
  q.push(tf("hard", "If $m$ and $b$ are integers, $y = mx + b$ has no fractional coefficients.", true));
  q.push(tf("hard", "The general form $Ax + By + C = 0$ can represent vertical lines.", true, "When $B = 0$."));
  q.push(tf("hard", "Two lines with the same $A$ and $B$ in general form have the same slope.", true));
  q.push(tf("hard", "Converting $y = mx + b$ (with integer $m, b$) to general form gives integer coefficients.", true, "$mx - y + b = 0$."));
  q.push(fill("hard", "The line $y = \\frac{3}{5}x - 2$ in general form (integers, $A>0$) is ___.", ["3x-5y-10=0", "3x - 5y - 10 = 0"]));
  q.push(fill("hard", "Convert $4x + 2y - 8 = 0$ to slope-intercept form: $y =$ ___.", ["-2x+4", "-2x + 4"]));
  q.push(num("hard", "The x-intercept of $2x + 3y - 12 = 0$ is ___.", 6, 0));
  q.push(fill("hard", "Write $y = 4x - 7$ in general form ($A>0$): ___.", ["4x-y-7=0", "4x - y - 7 = 0"]));
  q.push(num("hard", "The distance from the point $(1,2)$ to the line $3x + 4y - 10 = 0$ is ___.", 0.2, 0.01));

  return q;
}

// ── 4.9 Parallel and Perpendicular Lines ─────────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen49() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "Parallel lines have:", ["The same slope", "Different slopes", "Slopes that multiply to $-1$", "Slopes that are reciprocals"], 0));
  q.push(mc("easy", "Perpendicular lines have slopes that:", ["Are equal", "Multiply to $-1$", "Add to $0$", "Are reciprocals"], 1));
  q.push(mc("easy", "Which line is parallel to $y = 2x + 3$?", ["$y = 2x - 5$", "$y = -2x + 3$", "$y = \\frac{1}{2}x + 3$", "$y = -\\frac{1}{2}x + 3$"], 0));
  q.push(mc("easy", "Which line is perpendicular to $y = 3x + 1$?", ["$y = -\\frac{1}{3}x + 2$", "$y = \\frac{1}{3}x + 4$", "$y = -3x + 5$", "$y = 3x - 2$"], 0));
  q.push(mc("easy", "The slope of a line perpendicular to $y = -2x + 4$ is:", ["$2$", "$\\frac{1}{2}$", "$-2$", "$-\\frac{1}{2}$"], 1));
  q.push(ms("easy", "Which lines are parallel to $y = 4x - 2$?", ["$y = 4x + 7$", "$y = 4x$", "$y = \\frac{1}{4}x + 3$", "$y = -4x + 1$"], [0, 1]));
  q.push(ms("easy", "Which lines are perpendicular to $y = \\frac{2}{3}x + 5$?", ["$y = -\\frac{3}{2}x + 1$", "$3x + 2y - 4 = 0$", "$y = \\frac{3}{2}x - 4$", "$y = -\\frac{2}{3}x + 7$"], [0, 1], "Perpendicular slope $-\\frac{3}{2}$; $3x+2y-4=0 \\Rightarrow y = -\\frac{3}{2}x + 2$."));
  q.push(ms("easy", "Which slopes indicate perpendicular lines?", ["$2$ and $-\\frac{1}{2}$", "$-3$ and $\\frac{1}{3}$", "$4$ and $-\\frac{1}{4}$", "$\\frac{3}{4}$ and $-\\frac{4}{3}$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which lines are perpendicular to $2x + 3y - 6 = 0$?", ["$y = \\frac{3}{2}x + 1$", "$3x - 2y + 4 = 0$", "$y = -\\frac{2}{3}x + 5$", "$y = \\frac{3}{2}x - 7$"], [0, 1, 3], "Given slope $-\\frac{2}{3}$; perpendicular slope $\\frac{3}{2}$."));
  q.push(ms("easy", "Which lines are parallel to $3x - 2y + 5 = 0$?", ["$y = \\frac{3}{2}x + 1$", "$6x - 4y + 8 = 0$", "$y = -\\frac{3}{2}x + 4$", "$3x - 2y - 10 = 0$"], [0, 1, 3], "Given slope $\\frac{3}{2}$."));
  q.push(tf("easy", "Parallel lines have the same slope.", true));
  q.push(tf("easy", "Perpendicular lines have slopes that are negative reciprocals.", true));
  q.push(tf("easy", "A horizontal line is perpendicular to a vertical line.", true));
  q.push(tf("easy", "Lines with slopes $2$ and $\\frac{1}{2}$ are perpendicular.", false, "Product $= 1$, not $-1$."));
  q.push(tf("easy", "Lines with slopes $3$ and $-\\frac{1}{3}$ are perpendicular.", true));
  q.push(num("easy", "A line parallel to $y = 5x - 3$ has slope ___.", 5, 0));
  q.push(fill("easy", "A line perpendicular to $y = -\\frac{2}{3}x + 4$ has slope ___.", ["3/2", "\\frac{3}{2}", "1.5"]));
  q.push(num("easy", "The slope of a line parallel to $4x + 2y - 6 = 0$ is ___.", -2, 0));
  q.push(fill("easy", "The slope of a line perpendicular to $3x - y + 5 = 0$ is ___.", ["-1/3", "-\\frac{1}{3}"]));
  q.push(num("easy", "Two lines are perpendicular if the product of their slopes is ___.", -1, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Which line is parallel to $2x - 3y + 6 = 0$ and passes through $(1,-2)$?", ["$2x - 3y - 8 = 0$", "$2x - 3y + 8 = 0$", "$2x - 3y - 4 = 0$", "$2x - 3y + 4 = 0$"], 0, "$2(1) - 3(-2) + C = 0 \\Rightarrow C = -8$."));
  q.push(mc("medium", "Which line is perpendicular to $3x + 4y - 12 = 0$ and passes through $(0,5)$?", ["$4x - 3y + 15 = 0$", "$4x - 3y - 15 = 0$", "$4x + 3y - 15 = 0$", "$3x - 4y + 20 = 0$"], 0, "Perp slope $\\frac{4}{3}$; $y = \\frac{4}{3}x + 5 \\Rightarrow 4x - 3y + 15 = 0$."));
  q.push(mc("medium", "A line is parallel to $y = \\frac{1}{2}x + 3$ and passes through $(4,1)$. Its equation is:", ["$y = \\frac{1}{2}x - 1$", "$y = \\frac{1}{2}x + 1$", "$y = -2x + 9$", "$y = \\frac{1}{2}x - 3$"], 0, "$1 = \\frac{1}{2}(4) + b \\Rightarrow b = -1$."));
  q.push(mc("medium", "A line is perpendicular to $y = -3x + 2$ and passes through $(6,-1)$. Its equation is:", ["$y = \\frac{1}{3}x - 3$", "$y = \\frac{1}{3}x + 3$", "$y = -\\frac{1}{3}x + 1$", "$y = 3x - 3$"], 0, "Perp slope $\\frac{1}{3}$; $-1 = \\frac{1}{3}(6) + b \\Rightarrow b = -3$."));
  q.push(mc("medium", "Which statement is true about $y = 2x + 3$ and $y = 2x - 5$?", ["They are parallel", "They are perpendicular", "They intersect at $(0,3)$", "They are the same line"], 0));
  q.push(ms("medium", "Which lines are parallel to $4x - 2y + 6 = 0$ (i.e. $y = 2x + 3$)?", ["$y = 2x - 1$", "$2x - y + 7 = 0$", "$y = 2x$", "$y = -2x + 3$"], [0, 1, 2], "Parallel means slope $2$ and a different line."));
  q.push(ms("medium", "Which lines are perpendicular to $x - 2y + 4 = 0$?", ["$y = -2x + 1$", "$2x + y - 3 = 0$", "$y = 2x + 5$", "$y = -\\frac{1}{2}x + 7$"], [0, 1], "Given slope $\\frac{1}{2}$; perpendicular slope $-2$."));
  q.push(ms("medium", "A line passes through $(2,3)$ and is parallel to $y = 4x - 1$. Which are true?", ["Slope is $4$", "Equation is $y = 4x - 5$", "Equation is $y - 3 = 4(x - 2)$", "Passes through $(0,-5)$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A line passes through $(-1,4)$ and is perpendicular to $y = -\\frac{1}{2}x + 3$. Which are true?", ["Slope is $2$", "Equation is $y = 2x + 6$", "Equation is $y - 4 = 2(x + 1)$", "Passes through $(0,6)$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which pairs of lines are perpendicular?", ["$y = 3x + 2$ and $y = -\\frac{1}{3}x - 4$", "$2x + 3y - 6 = 0$ and $3x - 2y + 5 = 0$", "$y = 2x + 1$ and $y = -\\frac{1}{2}x + 3$", "$x - 2y + 4 = 0$ and $2x + y - 5 = 0$"], [0, 1, 2, 3]));
  q.push(tf("medium", "A line parallel to $y = 3x - 2$ has slope $3$.", true));
  q.push(tf("medium", "A line perpendicular to $y = -4x + 7$ has slope $-\\frac{1}{4}$.", false, "It should be $\\frac{1}{4}$."));
  q.push(tf("medium", "The lines $y = 2x + 3$ and $y = 2x - 5$ are parallel.", true));
  q.push(tf("medium", "The lines $y = \\frac{1}{2}x + 4$ and $y = -2x + 1$ are perpendicular.", true, "Product $\\frac{1}{2} \\times (-2) = -1$."));
  q.push(tf("medium", "Vertical lines are perpendicular to horizontal lines.", true));
  q.push(fill("medium", "A line parallel to $y = -3x + 5$ through $(2,1)$ has equation $y =$ ___.", ["-3x+7", "-3x + 7"]));
  q.push(fill("medium", "A line perpendicular to $y = \\frac{2}{3}x - 4$ through $(0,6)$ has equation $y =$ ___.", ["-3/2x+6", "-\\frac{3}{2}x+6", "-1.5x+6", "-\\frac{3}{2}x + 6"]));
  q.push(fill("medium", "The slope of a line parallel to $5x - 2y + 8 = 0$ is ___.", ["5/2", "\\frac{5}{2}", "2.5"]));
  q.push(num("medium", "The slope of a line perpendicular to $3x + 6y - 12 = 0$ is ___.", 2, 0));
  q.push(num("medium", "Lines with slopes $m_1$ and $m_2$ are perpendicular if $m_1 \\times m_2 =$ ___.", -1, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Two lines are perpendicular. One passes through $(1,2)$ and $(3,6)$. The other passes through $(2,5)$ — its slope is:", ["$-\\frac{1}{2}$", "$-2$", "$\\frac{1}{2}$", "$2$"], 0, "First slope $\\frac{6-2}{3-1} = 2$; perpendicular slope $-\\frac{1}{2}$."));
  q.push(mc("hard", "A line is parallel to $2x - 3y + 6 = 0$ and has the same x-intercept as $3x + 4y - 12 = 0$. Its equation is:", ["$2x - 3y - 8 = 0$", "$2x - 3y + 8 = 0$", "$2x - 3y - 12 = 0$", "$3x - 2y - 8 = 0$"], 0, "x-intercept of second is $4$; $2(4) - 0 + C = 0 \\Rightarrow C = -8$."));
  q.push(mc("hard", "A line is perpendicular to $3x + 2y - 6 = 0$ and passes through the origin. Its general form is:", ["$2x - 3y = 0$", "$3x - 2y = 0$", "$2x + 3y = 0$", "$3x + 2y = 0$"], 0, "Given slope $-\\frac{3}{2}$; perp slope $\\frac{2}{3}$; $y = \\frac{2}{3}x \\Rightarrow 2x - 3y = 0$."));
  q.push(mc("hard", "The line $y = 2x + 3$ is shifted right by $2$ and down by $1$. The new line is parallel to:", ["$y = 2x + 3$", "$y = 2x - 2$", "$y = 2x + 1$", "All of the above"], 3, "A shift does not change the slope; it stays $2$, so it is parallel to every slope-$2$ line."));
  q.push(mc("hard", "Two lines are perpendicular. If one has equation $Ax + By + C = 0$, the other has slope:", ["$\\frac{B}{A}$", "$-\\frac{A}{B}$", "$\\frac{A}{B}$", "$-\\frac{B}{A}$"], 0, "Given slope $-\\frac{A}{B}$; perpendicular slope $\\frac{B}{A}$."));
  q.push(ms("hard", "Which lines are perpendicular to $2x - 3y + 6 = 0$?", ["$3x + 2y - 4 = 0$", "$y = -\\frac{3}{2}x + 5$", "$y = -\\frac{3}{2}x$", "$3x + 2y + 7 = 0$"], [0, 1, 2, 3], "Given slope $\\frac{2}{3}$; perpendicular slope $-\\frac{3}{2}$."));
  q.push(ms("hard", "A line passes through $(3,-2)$ and is parallel to $4x - y + 5 = 0$. Which are true?", ["Slope is $4$", "Equation is $y = 4x - 14$", "Equation is $y + 2 = 4(x - 3)$", "Passes through $(0,-14)$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A line passes through $(-2,4)$ and is perpendicular to $x + 2y - 3 = 0$. Which are true?", ["Slope is $2$", "Equation is $y = 2x + 8$", "Equation is $y - 4 = 2(x + 2)$", "Passes through $(0,8)$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which pairs of lines are parallel?", ["$y = 3x + 2$ and $y = 3x - 5$", "$2x - y + 4 = 0$ and $4x - 2y - 3 = 0$", "$y = 2x + 1$ and $y = 2x - 1$", "$x - 2y + 3 = 0$ and $2x - 4y + 10 = 0$"], [0, 1, 2, 3], "D: $2x-4y+10=0 \\Rightarrow x-2y+5=0$, slope $\\frac{1}{2}$, distinct parallel."));
  q.push(ms("hard", "A square has vertices $(0,0), (2,0), (2,2), (0,2)$. About its diagonals, which are true?", ["The slopes are $1$ and $-1$", "The product of the slopes is $-1$", "The diagonals are perpendicular", "Each diagonal has length $2\\sqrt{2}$"], [0, 1, 2, 3]));
  q.push(tf("hard", "If two lines are parallel, their slopes are equal.", true));
  q.push(tf("hard", "If two non-vertical lines are perpendicular, the product of their slopes is $-1$.", true));
  q.push(tf("hard", "A vertical line is perpendicular to a horizontal line.", true));
  q.push(tf("hard", "Lines with slopes $2$ and $-\\frac{1}{2}$ are perpendicular.", true));
  q.push(tf("hard", "Lines with slopes $\\frac{3}{4}$ and $\\frac{4}{3}$ are perpendicular.", false, "Product $= 1$, not $-1$."));
  q.push(num("hard", "A line parallel to $2x + 3y - 5 = 0$ through $(1,-3)$ has equation $2x + 3y + C = 0$. Find $C$.", 7, 0));
  q.push(num("hard", "A line perpendicular to $4x - y + 2 = 0$ through $(0,-1)$ has equation $x + 4y + C = 0$. Find $C$.", 4, 0));
  q.push(fill("hard", "The slope of a line perpendicular to $3x + 5y - 7 = 0$ is ___.", ["5/3", "\\frac{5}{3}"]));
  q.push(fill("hard", "Two lines are parallel if their ___ are equal.", ["slopes", "slope"]));
  q.push(fill("hard", "Two lines are perpendicular if the product of their ___ is $-1$.", ["slopes", "slope"]));

  return q;
}

// ── 5.1 Geometry & Measurement Through History ───────────────
export function gen51() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "Who is known as the “Father of Geometry”?", ["Archimedes", "Pythagoras", "Euclid", "Thales"], 2));
  q.push(mc("easy", "The Pythagorean Theorem is named after:", ["Euclid", "Pythagoras", "Archimedes", "Thales"], 1));
  q.push(mc("easy", "The ancient Egyptians used geometry primarily for:", ["Astronomy", "Surveying land and building pyramids", "Navigation", "Art"], 1));
  q.push(mc("easy", "The metric system was developed in:", ["England", "France", "Greece", "Egypt"], 1));
  q.push(mc("easy", "The area of a circle $A = \\pi r^2$ was first accurately approximated by:", ["Euclid", "Pythagoras", "Archimedes", "Thales"], 2));
  // multiple select
  q.push(ms("easy", "Which ancient civilizations contributed to early geometry?", ["Egyptian", "Babylonian", "Greek", "Roman"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are contributions of Euclid?", ["Elements (13 books)", "An axiomatic approach to geometry", "The Pythagorean Theorem", "The volume of a sphere"], [0, 1]));
  q.push(ms("easy", "Which statements about measurement systems are true?", ["The metric system uses base 10", "The imperial system is used in the USA", "The metric system was developed in France", "The imperial system uses base 10"], [0, 1, 2]));
  q.push(ms("easy", "Which mathematicians are associated with ancient Greece?", ["Euclid", "Pythagoras", "Archimedes", "Thales"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are applications of geometry in ancient times?", ["Building pyramids", "Land surveying", "Astronomy", "Computer graphics"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "Euclid wrote a famous book called “Elements”.", true));
  q.push(tf("easy", "The Pythagorean Theorem is $a^2 + b^2 = c^2$.", true));
  q.push(tf("easy", "Archimedes discovered the formula for the area of a triangle.", false, "He is known for work on the circle, sphere, and π."));
  q.push(tf("easy", "The metric system is based on the number 12.", false, "It is based on 10."));
  q.push(tf("easy", "Geometry originated solely in Greece.", false, "It developed in Egypt, Babylon, and elsewhere too."));
  // fill in the blank
  q.push(fill("easy", "The “Father of Geometry” is ___.", ["Euclid"]));
  q.push(fill("easy", "The Pythagorean Theorem relates the sides of a ___ triangle.", ["right", "right-angled", "right angle"]));
  q.push(fill("easy", "The ancient Egyptians used geometry for building ___.", ["pyramids", "the pyramids"]));
  q.push(num("easy", "The metric system is based on powers of ___.", 10, 0));
  q.push(fill("easy", "Archimedes approximated the value of ___.", ["pi", "π", "\\pi"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "Which Greek mathematician calculated the circumference of the Earth?", ["Euclid", "Pythagoras", "Eratosthenes", "Archimedes"], 2));
  q.push(mc("medium", "The Rhind Mathematical Papyrus is from which civilization?", ["Greek", "Egyptian", "Babylonian", "Roman"], 1));
  q.push(mc("medium", "Thales is known for:", ["Proving a circle is bisected by its diameter", "The Pythagorean Theorem", "The volume of a sphere", "The metric system"], 0));
  q.push(mc("medium", "The volume of a sphere $V = \\frac{4}{3}\\pi r^3$ was derived by:", ["Euclid", "Archimedes", "Thales", "Pythagoras"], 1));
  q.push(mc("medium", "Measuring angles in degrees ($360°$) originated with the:", ["Greeks", "Egyptians", "Babylonians", "Romans"], 2));
  // multiple select
  q.push(ms("medium", "Which are contributions of Archimedes?", ["Volume of a sphere", "Area of a circle", "The principle of buoyancy", "The Pythagorean Theorem"], [0, 1, 2]));
  q.push(ms("medium", "Which ancient documents contain geometric knowledge?", ["Rhind Mathematical Papyrus", "Euclid's Elements", "Moscow Mathematical Papyrus", "The Iliad"], [0, 1, 2]));
  q.push(ms("medium", "Which statements about Thales are true?", ["He is considered the first Greek mathematician", "He proved angles in a semicircle are right angles", "He discovered the Pythagorean Theorem", "He used deductive reasoning"], [0, 1, 3]));
  q.push(ms("medium", "Which are true about the metric system?", ["It is used in most countries worldwide", "It includes meters, liters, and grams", "It was developed in the 18th century", "It is based on the imperial system"], [0, 1, 2]));
  q.push(ms("medium", "The Babylonians contributed to geometry through:", ["A base-60 number system", "$360°$ for a circle", "Pythagorean triples", "Euclidean axioms"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "Eratosthenes calculated the circumference of the Earth using geometry.", true));
  q.push(tf("medium", "The Rhind Papyrus contains problems about area and volume.", true));
  q.push(tf("medium", "Archimedes is known for the formula $a^2 + b^2 = c^2$.", false, "That is the Pythagorean Theorem."));
  q.push(tf("medium", "The Babylonians used a base-60 number system.", true));
  q.push(tf("medium", "The metric system was invented in England.", false, "It was developed in France."));
  // fill in the blank
  q.push(fill("medium", "The circumference of the Earth was calculated by ___.", ["Eratosthenes"]));
  q.push(fill("medium", "The Rhind Mathematical Papyrus is from the ___ civilization.", ["Egyptian", "Egypt"]));
  q.push(fill("medium", "Thales proved that angles in a ___ are right angles.", ["semicircle", "semi-circle", "a semicircle"]));
  q.push(fill("medium", "The volume-of-a-sphere formula was discovered by ___.", ["Archimedes"]));
  q.push(num("medium", "The Babylonians used a base-___ number system.", 60, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "Who is credited with first using deductive reasoning to prove geometric theorems?", ["Euclid", "Thales", "Pythagoras", "Archimedes"], 1));
  q.push(mc("hard", "The Moscow Mathematical Papyrus contains the formula for the volume of a:", ["Sphere", "Cylinder", "Truncated pyramid", "Cone"], 2));
  q.push(mc("hard", "Which civilization first developed systematic land measurement after the Nile floods?", ["Greek", "Babylonian", "Egyptian", "Roman"], 2));
  q.push(mc("hard", "Euclid's “Elements” consists of how many books?", ["10", "13", "15", "20"], 1));
  q.push(mc("hard", "The first known mathematical definition of the golden ratio ($\\phi$) appears in:", ["The Parthenon", "The Pyramids of Giza", "Euclid's Elements", "Babylonian tablets"], 2, "Euclid defined it as the “extreme and mean ratio” in Elements."));
  // multiple select
  q.push(ms("hard", "Which mathematicians developed calculus (which builds on geometry)?", ["Newton", "Leibniz", "Archimedes", "Euclid"], [0, 1], "Archimedes used the method of exhaustion, a precursor — not calculus itself."));
  q.push(ms("hard", "Which ancient texts contain geometric knowledge?", ["Euclid's Elements", "Rhind Mathematical Papyrus", "Moscow Mathematical Papyrus", "Plimpton 322 (Babylonian)"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which statements about the history of measurement are true?", ["Early measurements were based on body parts (foot, cubit)", "The metric system was developed to standardize measurements", "The imperial system is still used in the UK and USA", "The Babylonians used a base-60 system for time and angles"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which are true about Archimedes?", ["He proved the area of a circle is $\\pi r^2$", "He discovered the principle of buoyancy", "He calculated an approximation for $\\pi$", "He wrote “Elements”"], [0, 1, 2]));
  q.push(ms("hard", "Knowledge of the Pythagorean relationship predates Pythagoras among the:", ["Babylonians", "Egyptians", "Indians", "Romans"], [0, 1, 2], "e.g. the Babylonian tablet Plimpton 322."));
  // true / false
  q.push(tf("hard", "Euclid's “Elements” was the main geometry textbook for over 2000 years.", true));
  q.push(tf("hard", "The Pythagorean relationship was first known only after Pythagoras.", false, "It was known earlier (Babylonians, etc.)."));
  q.push(tf("hard", "Archimedes used the method of exhaustion to find the area of a circle.", true));
  q.push(tf("hard", "The metric system was adopted in France in 1795.", true));
  q.push(tf("hard", "The Babylonians did not use any geometry.", false, "They used it for astronomy and surveying."));
  // fill in the blank
  q.push(fill("hard", "The first known deductive proofs in geometry are attributed to ___.", ["Thales"]));
  q.push(fill("hard", "The Moscow Mathematical Papyrus gives the volume of a ___.", ["truncated pyramid", "frustum", "a truncated pyramid"]));
  q.push(num("hard", "Euclid's “Elements” has ___ books.", 13, 0));
  q.push(fill("hard", "The first mathematical definition of the golden ratio appears in ___.", ["Euclid's Elements", "Elements", "Euclid", "euclids elements"]));
  q.push(fill("hard", "The Babylonian base-60 system is still used today for ___.", ["time and angles", "time", "angles", "time and angles (degrees)"]));

  return q;
}

// ── 5.2 Designs with Circle & Triangle Properties ────────────
export function gen52() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The distance from the centre of a circle to any point on the circle is the:", ["Diameter", "Radius", "Circumference", "Chord"], 1));
  q.push(mc("easy", "The diameter of a circle is twice the:", ["Circumference", "Radius", "Chord", "Arc"], 1));
  q.push(mc("easy", "The sum of the interior angles of a triangle is:", ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], 1));
  q.push(mc("easy", "A triangle with all sides equal is called:", ["Scalene", "Isosceles", "Equilateral", "Right"], 2));
  q.push(mc("easy", "The circumference of a circle with radius $r$ is:", ["$\\pi r^2$", "$2\\pi r$", "$\\pi d$", "Both $2\\pi r$ and $\\pi d$"], 3));
  // multiple select
  q.push(ms("easy", "Which are properties of a circle?", ["All points are equidistant from the centre", "The diameter is the longest chord", "The radius is half the diameter", "The circumference is $2\\pi r$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which triangles have at least two equal sides?", ["Equilateral", "Isosceles", "Scalene", "Right"], [0, 1]));
  q.push(ms("easy", "Which statements about triangles are true?", ["The angle sum is $180^\\circ$", "A right triangle has one $90^\\circ$ angle", "An equilateral triangle has all angles $60^\\circ$", "A scalene triangle has no equal sides"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which formulas involve $\\pi$?", ["Area of a circle", "Circumference of a circle", "Area of a triangle", "Volume of a sphere"], [0, 1, 3]));
  q.push(ms("easy", "In a right triangle, the Pythagorean Theorem implies:", ["$a^2 + b^2 = c^2$", "$c$ is the hypotenuse", "$a^2 = c^2 - b^2$", "$b^2 = c^2 - a^2$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("easy", "The radius of a circle is half the diameter.", true));
  q.push(tf("easy", "A triangle can have two obtuse angles.", false));
  q.push(tf("easy", "The area of a circle is $\\pi d^2$.", false, "It is $\\pi r^2$."));
  q.push(tf("easy", "An isosceles triangle has two equal sides.", true));
  q.push(tf("easy", "The hypotenuse is the longest side in a right triangle.", true));
  // fill in the blank
  q.push(fill("easy", "The distance around a circle is called the ___.", ["circumference"]));
  q.push(fill("easy", "A triangle with no equal sides is called ___.", ["scalene"]));
  q.push(num("easy", "The sum of the angles in a triangle is ___ degrees.", 180, 0));
  q.push(num("easy", "The diameter of a circle with radius $5$ cm is ___ cm.", 10, 0));
  q.push(fill("easy", "The Pythagorean Theorem is $a^2 + b^2 = $ ___.", ["c^2", "c²"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "A circle has radius $7$ cm. Its area is approximately:", ["$44$ cm²", "$154$ cm²", "$22$ cm²", "$49$ cm²"], 1, "$\\pi \\times 7^2 \\approx 154$."));
  q.push(mc("medium", "A triangle has sides $3, 4, 5$. It is a:", ["Right triangle", "Equilateral triangle", "Isosceles triangle", "Scalene (not right) triangle"], 0, "$3^2 + 4^2 = 5^2$."));
  q.push(mc("medium", "A central angle measures $60^\\circ$. The corresponding arc is:", ["$30^\\circ$", "$60^\\circ$", "$120^\\circ$", "$180^\\circ$"], 1, "Arc measure equals the central angle."));
  q.push(mc("medium", "An inscribed angle subtends a semicircle. Its measure is:", ["$90^\\circ$", "$45^\\circ$", "$180^\\circ$", "$60^\\circ$"], 0));
  q.push(mc("medium", "The area of a triangle with base $10$ cm and height $6$ cm is:", ["$60$ cm²", "$30$ cm²", "$16$ cm²", "$120$ cm²"], 1, "$\\frac{1}{2}(10)(6) = 30$."));
  // multiple select
  q.push(ms("medium", "Which are true about a circle with diameter $12$ cm?", ["Radius is $6$ cm", "Circumference is $12\\pi$ cm", "Area is $36\\pi$ cm²", "Diameter is $24$ cm"], [0, 1, 2]));
  q.push(ms("medium", "A triangle has angles $30^\\circ, 60^\\circ, 90^\\circ$. Which are true?", ["It is a right triangle", "The side opposite $30^\\circ$ is half the hypotenuse", "It is isosceles", "The side opposite $90^\\circ$ is the hypotenuse"], [0, 1, 3]));
  q.push(ms("medium", "Which are properties of equilateral triangles?", ["All sides equal", "All angles $60^\\circ$", "Area $= \\frac{\\sqrt{3}}{4}s^2$", "One angle is $90^\\circ$"], [0, 1, 2]));
  q.push(ms("medium", "A circle has a central angle of $120^\\circ$. Which are true of its arc?", ["It is $120^\\circ$", "The major arc is $240^\\circ$", "Its length is $\\frac{120}{360} \\times 2\\pi r$", "It is half the circumference"], [0, 1, 2]));
  q.push(ms("medium", "A right triangle has legs $6$ and $8$. Which are true?", ["Hypotenuse is $10$", "Area is $24$", "Perimeter is $24$", "It is a 3-4-5 triangle scaled by 2"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "An inscribed angle is half the measure of its intercepted arc.", true));
  q.push(tf("medium", "A triangle with sides $5, 6, 7$ is right.", false, "$5^2 + 6^2 \\neq 7^2$."));
  q.push(tf("medium", "The area of a circle with radius $r$ is $2\\pi r^2$.", false, "It is $\\pi r^2$."));
  q.push(tf("medium", "A diameter divides a circle into two semicircles.", true));
  q.push(tf("medium", "An equilateral triangle is also isosceles.", true));
  // fill in the blank
  q.push(fill("medium", "The area of a circle with radius $4$ cm is ___ cm².", ["16\\pi", "16π", "16 pi"]));
  q.push(fill("medium", "In a right triangle, the side opposite the $90^\\circ$ angle is the ___.", ["hypotenuse"]));
  q.push(num("medium", "An inscribed angle subtending a semicircle measures ___ degrees.", 90, 0));
  q.push(fill("medium", "The area of a triangle with base $b$ and height $h$ is ___.", ["\\frac{1}{2}bh", "1/2bh", "bh/2", "(1/2)bh"]));
  q.push(num("medium", "A central angle of $90^\\circ$ subtends an arc of ___ degrees.", 90, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "A circle has radius $10$ cm. A chord is $16$ cm long. The distance from the centre to the chord is:", ["$6$ cm", "$8$ cm", "$4$ cm", "$10$ cm"], 0, "Half chord $= 8$; $\\sqrt{10^2 - 8^2} = 6$."));
  q.push(mc("hard", "Two concentric circles have radii $5$ cm and $13$ cm. A chord of the larger circle is tangent to the smaller. Its length is:", ["$12$ cm", "$24$ cm", "$10$ cm", "$26$ cm"], 1, "Half chord $= \\sqrt{13^2 - 5^2} = 12$; full $= 24$."));
  q.push(mc("hard", "For a triangle with sides $a,b,c$ and angles $A,B,C$, the Law of Sines states:", ["$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$", "$a^2 = b^2 + c^2 - 2bc\\cos A$", "$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$", "Both the first and third"], 3, "A and C are equivalent."));
  q.push(mc("hard", "A circle is inscribed in an equilateral triangle of side $6$ cm. The circle's radius is:", ["$2$ cm", "$2\\sqrt{3}$ cm", "$\\sqrt{3}$ cm", "$3$ cm"], 2, "Inradius $= \\frac{s\\sqrt{3}}{6} = \\sqrt{3}$."));
  q.push(mc("hard", "A triangle has sides $7, 24, 25$. The radius of its circumscribed circle is:", ["$12$ cm", "$12.5$ cm", "$25$ cm", "$10$ cm"], 1, "Right triangle; hypotenuse $25$ is the diameter, so radius $= 12.5$."));
  // multiple select
  q.push(ms("hard", "A chord of length $12$ cm lies in a circle of radius $10$ cm. Which are true?", ["The distance from the centre to the chord is $8$ cm", "It subtends a central angle of $2\\arcsin(0.6)$", "Each half of the chord is $6$ cm", "The chord is closer to the centre than the radius"], [0, 1, 2, 3], "Distance $= \\sqrt{10^2 - 6^2} = 8$."));
  q.push(ms("hard", "A triangle has sides $13, 14, 15$. Which are true?", ["Area is $84$ (Heron's formula)", "It is scalene", "It is a right triangle", "Perimeter is $42$"], [0, 1, 3], "$13^2 + 14^2 \\neq 15^2$, so not right."));
  q.push(ms("hard", "An equilateral triangle is inscribed in a circle of radius $R$. Which are true?", ["Side length $= R\\sqrt{3}$", "Side length $= 2R\\sin(60^\\circ)$", "Area $= \\frac{3\\sqrt{3}}{4}R^2$", "The central angle for each side is $120^\\circ$"], [0, 1, 2, 3], "$2R\\sin 60^\\circ = R\\sqrt{3}$."));
  q.push(ms("hard", "A right triangle is inscribed in a semicircle. Which are true?", ["The hypotenuse is the diameter", "The right angle is at the circumference", "The circle's centre is the midpoint of the hypotenuse", "The triangle is always isosceles"], [0, 1, 2]));
  q.push(ms("hard", "A circle is circumscribed about a square of side $s$. Which are true?", ["Radius $= \\frac{s\\sqrt{2}}{2}$", "Diameter $=$ diagonal of the square", "Area of the circle $= \\frac{\\pi s^2}{2}$", "Circumference $= \\pi s\\sqrt{2}$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "An inscribed angle is half the measure of its intercepted arc.", true));
  q.push(tf("hard", "A triangle inscribed in a semicircle is always a right triangle.", true));
  q.push(tf("hard", "The perpendicular from the centre of a circle to a chord bisects the chord.", true));
  q.push(tf("hard", "Two concentric circles never intersect.", true));
  q.push(tf("hard", "The area of a triangle can be found using Heron's formula without knowing the height.", true));
  // fill in the blank
  q.push(num("hard", "A chord of length $24$ cm in a circle of radius $13$ cm is ___ cm from the centre.", 5, 0));
  q.push(fill("hard", "A triangle with sides $8, 15, 17$ is ___.", ["right", "right triangle", "right-angled"]));
  q.push(fill("hard", "The radius of a circle inscribed in an equilateral triangle of side $12$ cm is ___ cm.", ["2\\sqrt{3}", "2√3", "2 sqrt 3", "2sqrt3"]));
  q.push(fill("hard", "The Law of Sines: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = $ ___ (diameter of the circumcircle).", ["2R", "2r"]));
  q.push(num("hard", "A semicircle has diameter $10$ cm. The largest triangle inscribed in it has area ___ cm².", 25, 0, "Base $= 10$, height $= 5$, area $= 25$."));

  return q;
}

// ── 5.3 Units & Unit Conversion ──────────────────────────────
export function gen53() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "How many millimetres are in 1 centimetre?", ["10", "100", "1000", "0.1"], 0));
  q.push(mc("easy", "How many metres are in 1 kilometre?", ["10", "100", "1000", "10000"], 2));
  q.push(mc("easy", "How many grams are in 1 kilogram?", ["10", "100", "1000", "10000"], 2));
  q.push(mc("easy", "How many millilitres are in 1 litre?", ["10", "100", "1000", "10000"], 2));
  q.push(mc("easy", "Convert 2.5 metres to centimetres:", ["25 cm", "250 cm", "2500 cm", "0.25 cm"], 1));
  // multiple select
  q.push(ms("easy", "Which are equal to 1 kilometre?", ["1000 m", "100,000 cm", "1,000,000 mm", "10,000 dm"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are equal to 1 hour?", ["60 minutes", "3600 seconds", "360 minutes", "60 seconds"], [0, 1]));
  q.push(ms("easy", "Which are equal to 1 metre?", ["100 cm", "1000 mm", "10 dm", "0.001 km"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are equal to 1 kilogram?", ["1000 g", "1,000,000 mg", "0.001 tonne", "100 g"], [0, 1, 2]));
  q.push(ms("easy", "Which metric conversions are true?", ["1 m = 100 cm", "1 km = 1000 m", "1 L = 1000 mL", "1 kg = 100 g"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "1 metre = 100 centimetres.", true));
  q.push(tf("easy", "1 kilometre = 100 metres.", false, "1 km = 1000 m."));
  q.push(tf("easy", "1 litre = 1000 millilitres.", true));
  q.push(tf("easy", "1 kilogram = 100 grams.", false, "1 kg = 1000 g."));
  q.push(tf("easy", "1 hour = 60 minutes.", true));
  // fill in the blank
  q.push(num("easy", "3 km = ___ m.", 3000, 0));
  q.push(num("easy", "450 cm = ___ m.", 4.5, 0));
  q.push(num("easy", "2.5 kg = ___ g.", 2500, 0));
  q.push(num("easy", "750 mL = ___ L.", 0.75, 0));
  q.push(num("easy", "120 minutes = ___ hours.", 2, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "Convert 5.6 km to metres:", ["56 m", "560 m", "5600 m", "0.0056 m"], 2));
  q.push(mc("medium", "Convert 3500 mg to grams:", ["0.35 g", "3.5 g", "35 g", "350 g"], 1));
  q.push(mc("medium", "Convert 2.5 hours to seconds:", ["150 s", "1500 s", "9000 s", "250 s"], 2, "$2.5 \\times 3600 = 9000$."));
  q.push(mc("medium", "A car travels at 72 km/h. In m/s this is:", ["20 m/s", "2 m/s", "200 m/s", "0.2 m/s"], 0, "$72 \\times \\frac{1000}{3600} = 20$."));
  q.push(mc("medium", "Convert 0.75 L to mL:", ["7.5 mL", "75 mL", "750 mL", "7500 mL"], 2));
  // multiple select
  q.push(ms("medium", "Which are equal to 1.5 km?", ["1500 m", "150,000 cm", "1,500,000 mm", "15,000 dm"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are equal to 0.25 kg?", ["250 g", "250,000 mg", "0.00025 tonne", "25 g"], [0, 1, 2]));
  q.push(ms("medium", "Which conversions are correct?", ["3.5 L = 3500 mL", "2.25 m = 225 cm", "0.6 km = 600 m", "1.5 kg = 1500 g"], [0, 1, 2, 3]));
  q.push(ms("medium", "A pool holds 4500 L. Which are true?", ["4.5 kL", "4,500,000 mL", "4.5 m³", "450,000 cL"], [0, 1, 2, 3]));
  q.push(ms("medium", "Convert 15 m/s to km/h. Which are correct?", ["54 km/h", "$15 \\times 3.6$", "54.0 km/h", "0.054 km/h"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "1 m² = 100 cm².", false, "1 m² = 10,000 cm²."));
  q.push(tf("medium", "1 L = 1000 cm³.", true));
  q.push(tf("medium", "1 km/h $= \\frac{1000}{3600}$ m/s $\\approx 0.278$ m/s.", true));
  q.push(tf("medium", "1 tonne = 1000 kg.", true));
  q.push(tf("medium", "1 day = 86,400 seconds.", true));
  // fill in the blank
  q.push(num("medium", "4.2 km = ___ m.", 4200, 0));
  q.push(num("medium", "0.875 L = ___ mL.", 875, 0));
  q.push(num("medium", "36 km/h = ___ m/s.", 10, 0));
  q.push(num("medium", "2500 mg = ___ g.", 2.5, 0));
  q.push(num("medium", "2.5 days = ___ hours.", 60, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "A garden measures 12.5 m by 8.4 m. Its area in cm² is:", ["105 cm²", "1,050,000 cm²", "10,500 cm²", "105,000 cm²"], 1, "$105$ m² $\\times 10{,}000 = 1{,}050{,}000$ cm²."));
  q.push(mc("hard", "A water tank has a capacity of 2.5 m³. How many litres?", ["250 L", "2500 L", "25,000 L", "0.25 L"], 1, "1 m³ = 1000 L."));
  q.push(mc("hard", "A car uses 8 L of fuel per 100 km. That is how many mL per km?", ["0.8 mL/km", "8 mL/km", "80 mL/km", "800 mL/km"], 2, "$8000 \\div 100 = 80$."));
  q.push(mc("hard", "A density of 2.5 g/cm³ in kg/m³ is:", ["2.5 kg/m³", "2500 kg/m³", "25 kg/m³", "0.0025 kg/m³"], 1, "1 g/cm³ = 1000 kg/m³."));
  q.push(mc("hard", "A runner completes a 5 km race in 20 minutes. The average speed in m/s is about:", ["4.17 m/s", "0.25 m/s", "250 m/s", "0.004 m/s"], 0, "$5000 \\div 1200 \\approx 4.17$."));
  // multiple select
  q.push(ms("hard", "A room measures 4.5 m by 3.2 m. Which are true?", ["Area = 14.4 m²", "Area = 144,000 cm²", "Area = 1,440,000 cm²", "Perimeter = 15.4 m"], [0, 1, 3], "14.4 m² = 144,000 cm²; perimeter $= 2(4.5+3.2) = 15.4$."));
  q.push(ms("hard", "Convert 80 km/h to m/s. Which are correct?", ["22.22 m/s", "$80 \\times 1000 \\div 3600$", "≈ 22.2 m/s", "288 m/s"], [0, 1, 2]));
  q.push(ms("hard", "A piece of land is 2.5 hectares (1 ha = 10,000 m²). Which are true?", ["25,000 m²", "0.025 km²", "250,000 m²", "$2.5 \\times 10^4$ m²"], [0, 1, 3]));
  q.push(ms("hard", "A jug has 1.5 L of juice; each glass holds 250 mL. How many full glasses?", ["6 glasses", "6", "0.006 glasses", "600 glasses"], [0, 1], "$1500 \\div 250 = 6$."));
  q.push(ms("hard", "A cyclist travels at 15 km/h for 2.5 hours. Which give the distance?", ["37,500 m", "$15 \\times 2.5 \\times 1000$", "37.5 km", "375 m"], [0, 1, 2]));
  // true / false
  q.push(tf("hard", "1 m³ = 1000 L = 1,000,000 mL.", true));
  q.push(tf("hard", "1 km² = 1,000,000 m².", true));
  q.push(tf("hard", "1 g/cm³ = 1000 kg/m³.", true));
  q.push(tf("hard", "1 hectare = 10,000 m² = 0.01 km².", true));
  q.push(tf("hard", "1 m/s = 3.6 km/h.", true));
  // fill in the blank
  q.push(num("hard", "A rectangle is 2.3 m by 1.5 m. Its area in cm² is ___.", 34500, 0));
  q.push(num("hard", "Convert 65 miles/hour to km/h (1 mile = 1.609 km). Answer ≈ ___ km/h.", 104.6, 0.3));
  q.push(num("hard", "A tank holds 3.2 m³ of water. That is ___ litres.", 3200, 0));
  q.push(num("hard", "0.75 g/cm³ = ___ kg/m³.", 750, 0));
  q.push(num("hard", "A jogger runs 10 km in 45 minutes. The speed in m/s is about ___.", 3.70, 0.03));

  return q;
}

// ── 5.4 The Pythagorean Theorem ──────────────────────────────
export function gen54() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "In a right triangle, the legs are $3$ and $4$. The hypotenuse is:", ["$5$", "$7$", "$\\sqrt{7}$", "$25$"], 0, "$3^2 + 4^2 = 25 \\Rightarrow c = 5$."));
  q.push(mc("easy", "In a right triangle, the hypotenuse is $13$ and one leg is $5$. The other leg is:", ["$8$", "$12$", "$\\sqrt{144}$", "Both $12$ and $\\sqrt{144}$"], 3, "$13^2 - 5^2 = 144 \\Rightarrow 12 = \\sqrt{144}$."));
  q.push(mc("easy", "The Pythagorean Theorem states:", ["$a^2 + b^2 = c^2$", "$a + b = c$", "$a^2 = b^2 + c^2$", "$a^2 + c^2 = b^2$"], 0));
  q.push(mc("easy", "A right triangle has legs $6$ cm and $8$ cm. The hypotenuse is:", ["$10$ cm", "$14$ cm", "$\\sqrt{10}$ cm", "$2$ cm"], 0));
  q.push(mc("easy", "Which of the following is a Pythagorean triple?", ["$3, 4, 5$", "$2, 3, 4$", "$5, 6, 7$", "$1, 2, 3$"], 0));
  // multiple select
  q.push(ms("easy", "Which sets form a right triangle?", ["$3, 4, 5$", "$6, 8, 10$", "$5, 12, 13$", "$2, 3, 4$"], [0, 1, 2]));
  q.push(ms("easy", "Which lengths could be the sides of a right triangle?", ["$9, 12, 15$", "$7, 24, 25$", "$8, 15, 17$", "$10, 20, 30$"], [0, 1, 2]));
  q.push(ms("easy", "The formula $a^2 + b^2 = c^2$ applies when:", ["$c$ is the hypotenuse", "The triangle is right", "The triangle is equilateral", "The triangle is isosceles"], [0, 1]));
  q.push(ms("easy", "Which statements about a $3, 4, 5$ triangle are true?", ["It is a right triangle", "$3^2 + 4^2 = 5^2$", "The hypotenuse is $5$", "The perimeter is $12$"], [0, 1, 2, 3]));
  q.push(ms("easy", "A triangle has sides $5, 12, 13$. Which are true?", ["It is a right triangle", "Hypotenuse is $13$", "$5^2 + 12^2 = 13^2$", "Area is $30$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("easy", "$3^2 + 4^2 = 5^2$.", true));
  q.push(tf("easy", "The Pythagorean Theorem works for any triangle.", false, "Only right triangles."));
  q.push(tf("easy", "In a right triangle, the hypotenuse is the longest side.", true));
  q.push(tf("easy", "$6, 8, 10$ is a Pythagorean triple.", true));
  q.push(tf("easy", "$1^2 + 2^2 = 3^2$.", false, "$1 + 4 = 5 \\neq 9$."));
  // fill in the blank
  q.push(num("easy", "In a right triangle with legs $5$ and $12$, the hypotenuse = ___.", 13, 0));
  q.push(num("easy", "In a right triangle with hypotenuse $17$ and leg $8$, the other leg = ___.", 15, 0));
  q.push(num("easy", "A Pythagorean triple is $3, 4,$ ___.", 5, 0));
  q.push(fill("easy", "The hypotenuse is always opposite the ___ angle.", ["right"]));
  q.push(fill("easy", "$a^2 + b^2 = c^2$ is the ___ Theorem.", ["Pythagorean"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "A ladder's foot is $6$ m from a wall and reaches $8$ m up. How long is the ladder?", ["$10$ m", "$14$ m", "$100$ m", "$2$ m"], 0, "$\\sqrt{6^2 + 8^2} = 10$."));
  q.push(mc("medium", "The diagonal of a rectangle with sides $9$ cm and $12$ cm is:", ["$15$ cm", "$21$ cm", "$3$ cm", "$225$ cm"], 0, "$\\sqrt{81 + 144} = 15$."));
  q.push(mc("medium", "A triangle has sides $10, 24, 26$. Is it right?", ["Yes", "No", "Cannot determine", "Only if scalene"], 0, "$10^2 + 24^2 = 676 = 26^2$."));
  q.push(mc("medium", "A square has diagonal $10\\sqrt{2}$ cm. Its side length is:", ["$10$ cm", "$20$ cm", "$5\\sqrt{2}$ cm", "$10\\sqrt{2}$ cm"], 0, "Diagonal $= s\\sqrt{2}$."));
  q.push(mc("medium", "The distance between $(1,2)$ and $(4,6)$ is:", ["$5$", "$\\sqrt{7}$", "$25$", "$7$"], 0, "$\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$."));
  // multiple select
  q.push(ms("medium", "Which side lengths form right triangles?", ["$20, 21, 29$", "$11, 60, 61$", "$9, 40, 41$", "$2, 5, 6$"], [0, 1, 2]));
  q.push(ms("medium", "A rectangle has diagonal $13$ cm and width $5$ cm. Which are correct?", ["Length is $12$ cm", "$5^2 + L^2 = 13^2$", "Length $= \\sqrt{169 - 25} = 12$", "Area is $60$ cm²"], [0, 1, 2, 3]));
  q.push(ms("medium", "For a right triangle with legs $a, b$ and hypotenuse $c$, which are true?", ["$a^2 + b^2 = c^2$", "$c > a$ and $c > b$", "$a^2 = c^2 - b^2$", "$b^2 = c^2 - a^2$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A $13$ m ladder reaches $12$ m up a wall. The foot of the ladder is:", ["$5$ m from the wall", "$\\sqrt{13^2 - 12^2}$", "$\\sqrt{169 - 144} = 5$", "$25$ m"], [0, 1, 2]));
  q.push(ms("medium", "Which sets of points form a right triangle?", ["$(0,0), (3,0), (0,4)$", "$(1,1), (4,1), (1,5)$", "$(0,0), (2,2), (2,0)$", "$(0,0), (1,2), (3,0)$"], [0, 1, 2]));
  // true / false
  q.push(tf("medium", "The distance between $(1,1)$ and $(4,5)$ is $5$.", true, "$\\sqrt{9 + 16} = 5$."));
  q.push(tf("medium", "A triangle with sides $7, 24, 25$ is right.", true));
  q.push(tf("medium", "In a right triangle, the hypotenuse is always the smallest side.", false));
  q.push(tf("medium", "A square with diagonal $8$ cm has side $4\\sqrt{2}$ cm.", true));
  q.push(tf("medium", "The Pythagorean Theorem can be used on any triangle.", false));
  // fill in the blank
  q.push(num("medium", "A $15$ m ladder reaches $12$ m up a wall. The foot is ___ m from the wall.", 9, 0));
  q.push(num("medium", "The diagonal of a rectangle $5$ cm by $12$ cm is ___ cm.", 13, 0));
  q.push(num("medium", "The distance between $(2,3)$ and $(5,7)$ is ___.", 5, 0));
  q.push(num("medium", "A right triangle has legs $x$ and $x+1$, hypotenuse $x+2$. Then $x =$ ___.", 3, 0));
  q.push(fill("medium", "A square has side $6$ cm. Its diagonal = ___ cm.", ["6\\sqrt{2}", "6√2", "6 sqrt 2", "6sqrt2"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "A rectangular box is $3$ cm × $4$ cm × $12$ cm. The space diagonal is:", ["$13$ cm", "$\\sqrt{200}$ cm", "$19$ cm", "$12$ cm"], 0, "$\\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$."));
  q.push(mc("hard", "A triangle has sides $x, x+1, x+2$. If it is right, find $x$.", ["$3$", "$2$", "$4$", "$5$"], 0, "$x^2 + (x+1)^2 = (x+2)^2 \\Rightarrow x^2 - 2x - 3 = 0 \\Rightarrow x = 3$."));
  q.push(mc("hard", "An equilateral triangle has side $6$ cm. Its height is:", ["$3\\sqrt{3}$ cm", "$3$ cm", "$6\\sqrt{3}$ cm", "$12$ cm"], 0, "Height $= \\frac{\\sqrt{3}}{2}\\times 6 = 3\\sqrt{3}$."));
  q.push(mc("hard", "A circle has a chord of length $24$ cm at distance $5$ cm from the centre. The radius is:", ["$13$ cm", "$12$ cm", "$7$ cm", "$\\sqrt{601}$ cm"], 0, "$\\sqrt{12^2 + 5^2} = 13$."));
  q.push(mc("hard", "Two ships leave a port: one north at $20$ km/h, one east at $15$ km/h. How far apart after $2$ hours?", ["$50$ km", "$70$ km", "$100$ km", "$25$ km"], 0, "$\\sqrt{40^2 + 30^2} = 50$."));
  // multiple select
  q.push(ms("hard", "A rectangular box is $6, 8, 10$. Which statements are true?", ["Space diagonal $= \\sqrt{200}$", "Space diagonal $= 10\\sqrt{2}$", "Space diagonal $\\approx 14.14$", "Face diagonal of the $6 \\times 8$ face is $10$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A triangle has sides $a, b, c$ with $a^2 + b^2 = c^2$. Which are true?", ["The triangle is right", "$c$ is the hypotenuse", "$\\angle C = 90^\\circ$", "The area is $\\frac{1}{2}ab$"], [0, 1, 2, 3]));
  q.push(ms("hard", "An isosceles right triangle has legs $5$ cm. Which are correct?", ["Hypotenuse $= 5\\sqrt{2}$ cm", "Area $= 12.5$ cm²", "Perimeter $= 10 + 5\\sqrt{2}$ cm", "Base angles are $45^\\circ$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A $25$ m ladder reaches $24$ m up a wall, foot $7$ m out. Which are true?", ["$7^2 + 24^2 = 25^2$", "The foot is $7$ m away", "The angle with the ground is $\\arcsin(24/25)$", "The triangle's area is $84$ m²"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which are Pythagorean triples?", ["$8, 15, 17$", "$20, 21, 29$", "$12, 35, 37$", "$9, 12, 15$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "The space diagonal of a cube with side $s$ is $s\\sqrt{3}$.", true));
  q.push(tf("hard", "A triangle with sides $2, 3, 4$ is acute.", false, "$2^2 + 3^2 = 13 < 16$, so it is obtuse."));
  q.push(tf("hard", "The height of an equilateral triangle with side $s$ is $\\frac{\\sqrt{3}}{2}s$.", true));
  q.push(tf("hard", "A right triangle with legs $a$ and $b$ has area $\\frac{ab}{2}$.", true));
  q.push(tf("hard", "The Pythagorean Theorem only works for right triangles.", true));
  // fill in the blank
  q.push(fill("hard", "A box is $5$ cm by $12$ cm by $13$ cm. Its space diagonal is ___ cm.", ["13\\sqrt{2}", "13√2", "13 sqrt 2", "13sqrt2"]));
  q.push(num("hard", "A $17$ m ladder's foot is $8$ m from a wall. The height reached is ___ m.", 15, 0));
  q.push(fill("hard", "An equilateral triangle of side $10$ cm has height ___ cm.", ["5\\sqrt{3}", "5√3", "5 sqrt 3", "5sqrt3"]));
  q.push(num("hard", "If $x, x+1, x+2$ form a right triangle, then $x =$ ___.", 3, 0));
  q.push(num("hard", "The distance between $(3,-2)$ and $(-1,1)$ is ___.", 5, 0));

  return q;
}

// ── 5.5 Changing Dimensions: Perimeter ───────────────────────
export function gen55() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The perimeter of a square with side $5$ cm is:", ["$10$ cm", "$15$ cm", "$20$ cm", "$25$ cm"], 2, "$4 \\times 5 = 20$."));
  q.push(mc("easy", "The perimeter of a rectangle with length $8$ cm and width $3$ cm is:", ["$11$ cm", "$22$ cm", "$24$ cm", "$16$ cm"], 1, "$2(8+3) = 22$."));
  q.push(mc("easy", "The perimeter of a triangle with sides $4$, $7$, $9$ cm is:", ["$20$ cm", "$18$ cm", "$16$ cm", "$22$ cm"], 0));
  q.push(mc("easy", "If the side length of a square is doubled, the perimeter is:", ["Doubled", "Halved", "Quadrupled", "Unchanged"], 0));
  q.push(mc("easy", "The circumference of a circle with radius $7$ cm (use $\\pi \\approx \\frac{22}{7}$) is:", ["$14$ cm", "$22$ cm", "$44$ cm", "$154$ cm"], 2, "$2 \\times \\frac{22}{7} \\times 7 = 44$."));
  // multiple select
  q.push(ms("easy", "Which are correct perimeter formulas?", ["Square: $P = 4s$", "Rectangle: $P = 2(l + w)$", "Triangle: $P = a + b + c$", "Circle: $P = 2\\pi r$"], [0, 1, 2, 3]));
  q.push(ms("easy", "A rectangle has length $10$ and width $4$. Which equal its perimeter?", ["$28$", "$2(10 + 4)$", "$20 + 8$", "$14$"], [0, 1, 2]));
  q.push(ms("easy", "Which changes double the perimeter of a square (original side $s$)?", ["Doubling the side length", "Adding $s$ to each side", "Doubling the perimeter", "Increasing the side by $100\\%$"], [0, 1, 2, 3], "Adding $s$ makes the side $2s$, so the perimeter doubles."));
  q.push(ms("easy", "The perimeter of a regular hexagon with side $6$ cm — which are correct?", ["$36$ cm", "$6 \\times 6$", "$12$ cm", "$30$ cm"], [0, 1]));
  q.push(ms("easy", "A triangle has sides $x$, $x+2$, $x+4$. Which equal its perimeter?", ["$3x + 6$", "$x + (x+2) + (x+4)$", "$3(x + 2)$", "$3x$"], [0, 1, 2]));
  // true / false
  q.push(tf("easy", "The perimeter of a square with side $s$ is $4s$.", true));
  q.push(tf("easy", "Doubling all sides of a triangle doubles its perimeter.", true));
  q.push(tf("easy", "The circumference of a circle is $2\\pi r$.", true));
  q.push(tf("easy", "Adding $2$ to every side of a rectangle adds $4$ to the perimeter.", false, "All four sides grow, so the perimeter increases by $8$."));
  q.push(tf("easy", "The perimeter of a regular pentagon with side $s$ is $5s$.", true));
  // fill in the blank
  q.push(num("easy", "Perimeter of a square with side $9$ cm = ___ cm.", 36, 0));
  q.push(num("easy", "Perimeter of a rectangle $12$ cm by $5$ cm = ___ cm.", 34, 0));
  q.push(num("easy", "Perimeter of an equilateral triangle with side $7$ cm = ___ cm.", 21, 0));
  q.push(num("easy", "Circumference of a circle with radius $10$ cm (use $\\pi = 3.14$) ≈ ___ cm.", 62.8, 0.05));
  q.push(num("easy", "If a square has perimeter $36$ cm, its side = ___ cm.", 9, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "A rectangle has perimeter $50$ cm and length $15$ cm. Its width is:", ["$10$ cm", "$20$ cm", "$35$ cm", "$5$ cm"], 0, "$2(15 + w) = 50 \\Rightarrow w = 10$."));
  q.push(mc("medium", "A square (side $8$ cm) and a rectangle (length $10$ cm) have equal perimeters. The rectangle's width is:", ["$6$ cm", "$8$ cm", "$4$ cm", "$12$ cm"], 0, "Perimeter $32$; $2(10+w) = 32 \\Rightarrow w = 6$."));
  q.push(mc("medium", "If the side of a square is increased by $3$ cm, the perimeter increases by:", ["$3$ cm", "$6$ cm", "$9$ cm", "$12$ cm"], 3, "$4 \\times 3 = 12$."));
  q.push(mc("medium", "A circle has circumference $44$ cm. Its radius (use $\\pi = \\frac{22}{7}$) is:", ["$7$ cm", "$14$ cm", "$22$ cm", "$3.5$ cm"], 0));
  q.push(mc("medium", "A regular pentagon has perimeter $45$ cm. Its side length is:", ["$5$ cm", "$9$ cm", "$15$ cm", "$22.5$ cm"], 1, "$45 \\div 5 = 9$."));
  // multiple select
  q.push(ms("medium", "A rectangle's length is doubled and width halved (new $P = 4l + w$). Which are true?", ["The new perimeter is $4l + w$", "The change is $2l - w$", "It is unchanged only if $w = 2l$", "It always increases"], [0, 1, 2], "Change $= (4l+w) - (2l+2w) = 2l - w$; zero when $w = 2l$."));
  q.push(ms("medium", "A square has side $s$. If each side is increased by $2$, the perimeter:", ["Increases by $8$", "Becomes $4s + 8$", "Increases by $2$", "Is $4(s + 2)$"], [0, 1, 3]));
  q.push(ms("medium", "Which statements about perimeters are true?", ["Scaling all sides by $k$ scales the perimeter by $k$", "Adding $x$ to each of $n$ sides adds $nx$ to the perimeter", "Circumference is proportional to radius", "Doubling the radius doubles the circumference"], [0, 1, 2, 3]));
  q.push(ms("medium", "A triangle has sides $3x, 4x, 5x$ and perimeter $36$. Which are true?", ["$12x = 36 \\Rightarrow x = 3$", "The sides are $9, 12, 15$", "It is a right triangle", "The perimeter is $36$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A circle's radius is doubled. Its new circumference:", ["Doubles", "Increases by $2\\pi r$", "Is $4\\pi r$", "Is $2\\times$ the original"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "If a square's side is tripled, its perimeter triples.", true));
  q.push(tf("medium", "Increasing a rectangle's length by $2$ and width by $2$ increases the perimeter by $8$.", true, "$2(2 + 2) = 8$."));
  q.push(tf("medium", "The perimeter of a circle is called the circumference.", true));
  q.push(tf("medium", "A regular octagon with side $4$ cm has perimeter $32$ cm.", true));
  q.push(tf("medium", "If the radius of a circle is halved, the circumference halves.", true));
  // fill in the blank
  q.push(num("medium", "A rectangle has perimeter $48$ cm and width $9$ cm. Its length = ___ cm.", 15, 0));
  q.push(num("medium", "A square has perimeter $60$ cm. Its side = ___ cm.", 15, 0));
  q.push(num("medium", "A regular hexagon has perimeter $72$ cm. Its side = ___ cm.", 12, 0));
  q.push(num("medium", "A circle has circumference $31.4$ cm (use $\\pi = 3.14$). Its radius = ___ cm.", 5, 0));
  q.push(num("medium", "If a square's side increases from $4$ cm to $7$ cm, the perimeter increases by ___ cm.", 12, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "A rectangle has perimeter $P$ and length $3$ times its width. The width is:", ["$\\frac{P}{8}$", "$\\frac{P}{6}$", "$\\frac{P}{4}$", "$\\frac{P}{2}$"], 0, "$P = 2(3w + w) = 8w \\Rightarrow w = \\frac{P}{8}$."));
  q.push(mc("hard", "A $120$ cm wire is bent into a rectangle whose length is $4$ cm more than its width. The width is:", ["$28$ cm", "$30$ cm", "$32$ cm", "$14$ cm"], 0, "$4w + 8 = 120 \\Rightarrow w = 28$."));
  q.push(mc("hard", "A circle of radius $r$ has circumference equal to the perimeter of a square. The side of the square is:", ["$\\frac{\\pi r}{2}$", "$\\frac{\\pi r}{4}$", "$2\\pi r$", "$\\frac{4}{\\pi r}$"], 0, "$2\\pi r = 4s \\Rightarrow s = \\frac{\\pi r}{2}$."));
  q.push(mc("hard", "A triangle's sides are in ratio $3:4:5$ and its perimeter is $48$ cm. The longest side is:", ["$12$ cm", "$16$ cm", "$20$ cm", "$24$ cm"], 2, "$12x = 48 \\Rightarrow x = 4$; longest $= 5 \\times 4 = 20$."));
  q.push(mc("hard", "A rectangle's length is increased by $20\\%$ and width decreased by $20\\%$. The perimeter:", ["changes by $0.4(l - w)$", "always stays the same", "always increases by $20\\%$", "always decreases by $20\\%$"], 0, "New $- $ old $= (2.4l + 1.6w) - (2l + 2w) = 0.4(l - w)$."));
  // multiple select
  q.push(ms("hard", "A square and a circle have the same perimeter. Which are true?", ["The square has the larger area", "The circle has the larger area", "Side of square $= \\frac{\\pi r}{2}$", "Radius $= \\frac{2s}{\\pi}$"], [1, 2, 3], "For a fixed perimeter, the circle encloses more area."));
  q.push(ms("hard", "A rectangle's length is increased by $10$ cm and width decreased by $10$ cm. Which are true?", ["The perimeter stays the same", "New perimeter $= 2(l + w)$", "The change is $0$ cm", "The perimeter depends on the original dimensions"], [0, 1, 2], "$2((l+10)+(w-10)) = 2(l+w)$."));
  q.push(ms("hard", "A regular polygon with $n$ sides (side $s$, perimeter $P$) has each side increased by $x$. The new perimeter is:", ["$P + nx$", "$n(s + x)$", "$P + x$", "$P + n + x$"], [0, 1]));
  q.push(ms("hard", "A circle's circumference is $C$. If the radius is increased by $2$, the new circumference is:", ["$C + 4\\pi$", "$2\\pi(r + 2)$", "$C + 2\\pi$", "$2\\pi r + 4\\pi$"], [0, 1, 3]));
  q.push(ms("hard", "A triangle has sides $2x+1, 3x-2, 4x+3$ and perimeter $47$. Which are true?", ["$9x + 2 = 47$", "$x = 5$", "The sides are $11, 13, 23$", "The perimeter is $47$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "Scaling a polygon by factor $k$ scales its perimeter by $k$.", true));
  q.push(tf("hard", "Increasing the radius of a circle by $1$ unit increases the circumference by $2\\pi$ units.", true));
  q.push(tf("hard", "A rectangle with length doubled and width halved has the same perimeter as the original only when $w = 2l$.", true, "$4l + w = 2l + 2w \\Rightarrow w = 2l$."));
  q.push(tf("hard", "The perimeter of a regular polygon is always $n \\times$ side.", true));
  q.push(tf("hard", "If a square's side is increased by $5$, its perimeter increases by $20$.", true, "$4 \\times 5 = 20$."));
  // fill in the blank
  q.push(fill("hard", "A rectangle has perimeter $P$ with length $= 3w - 2$. Then $w =$ ___ (in terms of $P$).", ["(P+4)/8", "\\frac{P+4}{8}"]));
  q.push(num("hard", "A $100$ cm wire forms a rectangle with length $x$ and width $x - 2$. Then $x =$ ___ cm.", 26, 0));
  q.push(num("hard", "The side of a square whose perimeter equals the circumference of a circle of radius $7$ cm (use $\\pi \\approx \\frac{22}{7}$) is ___ cm.", 11, 0));
  q.push(num("hard", "A triangle with sides in ratio $2:3:4$ has perimeter $54$ cm. Its shortest side is ___ cm.", 12, 0));
  q.push(num("hard", "If a square's side increases from $s$ to $s + 3$, its perimeter increases by ___.", 12, 0));

  return q;
}

// ── 5.6 Changing Dimensions: Area ────────────────────────────
export function gen56() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The area of a square with side length $6$ cm is:", ["$24$ cm²", "$36$ cm²", "$12$ cm²", "$48$ cm²"], 1, "$6^2 = 36$."));
  q.push(mc("easy", "The area of a rectangle with length $8$ cm and width $5$ cm is:", ["$26$ cm²", "$40$ cm²", "$13$ cm²", "$80$ cm²"], 1, "$8 \\times 5 = 40$."));
  q.push(mc("easy", "The area of a triangle with base $10$ cm and height $6$ cm is:", ["$60$ cm²", "$30$ cm²", "$16$ cm²", "$120$ cm²"], 1, "$\\frac{1}{2} \\times 10 \\times 6 = 30$."));
  q.push(mc("easy", "The area of a circle with radius $7$ cm (use $\\pi \\approx \\frac{22}{7}$) is:", ["$44$ cm²", "$154$ cm²", "$22$ cm²", "$308$ cm²"], 1, "$\\frac{22}{7} \\times 7^2 = 154$."));
  q.push(mc("easy", "If the side length of a square is doubled, its area is:", ["Doubled", "Halved", "Quadrupled", "Unchanged"], 2, "$(2s)^2 = 4s^2$."));
  // multiple select
  q.push(ms("easy", "Which formulas for area are correct?", ["Square: $A = s^2$", "Rectangle: $A = l \\times w$", "Triangle: $A = \\frac{1}{2}bh$", "Circle: $A = \\pi r^2$"], [0, 1, 2, 3]));
  q.push(ms("easy", "A rectangle has area $24$ cm². Which dimensions are possible?", ["$3$ cm by $8$ cm", "$4$ cm by $6$ cm", "$2$ cm by $12$ cm", "$5$ cm by $5$ cm"], [0, 1, 2]));
  q.push(ms("easy", "Which changes quadruple the area of a square (original side $s$)?", ["Doubling the side length", "Increasing the side by $100\\%$", "Multiplying the side by $2$", "Adding $s$ to each side"], [0, 1, 2, 3], "Adding $s$ makes the side $2s$, so the area becomes $(2s)^2 = 4s^2$."));
  q.push(ms("easy", "A triangle has base $b$ and height $h$. Its area is:", ["$\\frac{1}{2}bh$", "$\\frac{bh}{2}$", "$0.5 \\times b \\times h$", "$b \\times h$"], [0, 1, 2]));
  q.push(ms("easy", "The area of a circle with radius doubled is:", ["Quadrupled", "$4$ times the original", "$\\pi(2r)^2$", "$4\\pi r^2$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("easy", "The area of a square with side $s$ is $s^2$.", true));
  q.push(tf("easy", "The area of a triangle is base times height.", false, "It is half the base times height."));
  q.push(tf("easy", "Doubling the radius of a circle doubles its area.", false, "It quadruples the area."));
  q.push(tf("easy", "A rectangle $5$ cm by $10$ cm has area $50$ cm².", true));
  q.push(tf("easy", "Scaling all dimensions of a shape by $k$ scales the area by $k^2$.", true));
  // fill in the blank
  q.push(num("easy", "Area of a square with side $9$ cm = ___ cm².", 81, 0));
  q.push(num("easy", "Area of a rectangle $12$ cm by $5$ cm = ___ cm².", 60, 0));
  q.push(num("easy", "Area of a triangle with base $8$ cm and height $7$ cm = ___ cm².", 28, 0));
  q.push(num("easy", "Area of a circle with radius $10$ cm (use $\\pi = 3.14$) ≈ ___ cm².", 314, 0.5));
  q.push(num("easy", "If a square has area $64$ cm², its side = ___ cm.", 8, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "A rectangle has area $72$ cm² and length $12$ cm. Its width is:", ["$6$ cm", "$8$ cm", "$60$ cm", "$84$ cm"], 0, "$72 \\div 12 = 6$."));
  q.push(mc("medium", "A triangle has area $30$ cm² and base $10$ cm. Its height is:", ["$3$ cm", "$6$ cm", "$1.5$ cm", "$300$ cm"], 1, "$\\frac{1}{2} \\times 10 \\times h = 30 \\Rightarrow h = 6$."));
  q.push(mc("medium", "If the side of a square is increased by $2$ cm and the area increases by $20$ cm², the original side is:", ["$2$ cm", "$4$ cm", "$6$ cm", "$8$ cm"], 1, "$(s+2)^2 - s^2 = 4s + 4 = 20 \\Rightarrow s = 4$."));
  q.push(mc("medium", "The area of a circle with circumference $44$ cm (use $\\pi = \\frac{22}{7}$) is:", ["$154$ cm²", "$44$ cm²", "$22$ cm²", "$308$ cm²"], 0, "$2\\pi r = 44 \\Rightarrow r = 7$; $A = \\frac{22}{7} \\times 49 = 154$."));
  q.push(mc("medium", "A parallelogram has base $8$ cm and height $5$ cm. Its area is:", ["$40$ cm²", "$13$ cm²", "$20$ cm²", "$80$ cm²"], 0, "$8 \\times 5 = 40$."));
  // multiple select
  q.push(ms("medium", "A rectangle's length is doubled and width is halved. The area:", ["Stays the same", "Doubles", "Halves", "Quadruples"], [0], "New area $= 2l \\times \\frac{w}{2} = lw$."));
  q.push(ms("medium", "A square has side $s$. If each side is increased by $3$, the area:", ["Increases by $6s + 9$", "Becomes $s^2 + 6s + 9$", "Increases by $9$ only", "Is $(s+3)^2$"], [0, 1, 3]));
  q.push(ms("medium", "Which statements about areas are true?", ["Scaling all sides by $k$ scales the area by $k^2$", "Doubling the radius quadruples a circle's area", "Tripling the side of a square multiplies its area by $9$", "A triangle's area is proportional to base and height"], [0, 1, 2, 3]));
  q.push(ms("medium", "A triangle and a parallelogram have the same base and height. Then:", ["The triangle's area is half the parallelogram's area", "The parallelogram's area is twice the triangle's area", "Their areas are equal", "The parallelogram has the larger area"], [0, 1, 3]));
  q.push(ms("medium", "A circle has its radius doubled. Its area:", ["Quadruples", "Is $4$ times the original", "Increases by $3\\pi r^2$ (over the original)", "Is $\\pi(2r)^2$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "Doubling the base and height of a triangle quadruples its area.", true));
  q.push(tf("medium", "A rectangle with length $x$ and width $y$ has area $xy$.", true));
  q.push(tf("medium", "Increasing the radius of a circle by $2$ cm increases its area by exactly $4\\pi$ cm².", false, "Increase $= \\pi(r+2)^2 - \\pi r^2 = 4\\pi r + 4\\pi$."));
  q.push(tf("medium", "A square with diagonal $d$ has area $\\frac{d^2}{2}$.", true));
  q.push(tf("medium", "The area of a trapezoid is the average of the bases times the height.", true));
  // fill in the blank
  q.push(num("medium", "A rectangle has area $54$ cm² and width $6$ cm. Its length = ___ cm.", 9, 0));
  q.push(num("medium", "A triangle has area $45$ cm² and height $9$ cm. Its base = ___ cm.", 10, 0));
  q.push(fill("medium", "A square has side $s$. If the side increases by $4$, the new area = ___ (expand).", ["s^2+8s+16", "s²+8s+16", "(s+4)^2", "(s+4)²"]));
  q.push(num("medium", "A circle has radius $5$ cm. Its area ≈ ___ cm² (use $\\pi = 3.14$).", 78.5, 0.05));
  q.push(num("medium", "A parallelogram with base $12$ cm and height $7$ cm has area ___ cm².", 84, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "A rectangle has length $3x$ and width $2x$, with area $216$ cm². Its perimeter is:", ["$30$ cm", "$60$ cm", "$90$ cm", "$120$ cm"], 1, "$6x^2 = 216 \\Rightarrow x = 6$; sides $18$ and $12$; $P = 2(18+12) = 60$."));
  q.push(mc("hard", "A square and a circle have the same perimeter. The square has side $s$. The circle's area is:", ["$\\frac{s^2}{\\pi}$", "$\\frac{4s^2}{\\pi}$", "$\\pi s^2$", "$\\frac{2s^2}{\\pi}$"], 1, "$4s = 2\\pi r \\Rightarrow r = \\frac{2s}{\\pi}$; $A = \\pi r^2 = \\frac{4s^2}{\\pi}$."));
  q.push(mc("hard", "A triangle's base is increased by $50\\%$ and its height decreased by $50\\%$. The area:", ["Increases by $25\\%$", "Decreases by $25\\%$", "Stays the same", "Decreases by $50\\%$"], 1, "New $= 1.5 \\times 0.5 = 0.75$ of original, a $25\\%$ decrease."));
  q.push(mc("hard", "A circle is inscribed in a square of side $10$ cm. The area between the square and the circle is:", ["$100 - 25\\pi$ cm²", "$100 - \\frac{100\\pi}{4}$ cm²", "$100 - 50\\pi$ cm²", "Both $100 - 25\\pi$ and $100 - \\frac{100\\pi}{4}$ cm²"], 3, "Square $= 100$, circle $r = 5$ so $25\\pi$; $\\frac{100\\pi}{4} = 25\\pi$, so the first two are equal."));
  q.push(mc("hard", "A rectangle has length $l$ and width $w$. If the length is increased by $20\\%$ and the width decreased by $20\\%$, the area:", ["Increases by $4\\%$", "Decreases by $4\\%$", "Stays the same", "Decreases by $20\\%$"], 1, "$1.2 \\times 0.8 = 0.96$, a $4\\%$ decrease."));
  // multiple select
  q.push(ms("hard", "A square of side $s$ is enlarged by a scale factor $k$. True statements:", ["New area $= k^2 s^2$", "New perimeter $= 4ks$", "New area $= k^2$ times the original area", "New side $= ks$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A rectangle has length $l$ and width $w$. If both are increased by $x$, the area increase is:", ["$x(l+w) + x^2$", "$lx + wx + x^2$", "$x(l + w + x)$", "$(l+x)(w+x) - lw$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A circle's radius (originally $R$) is increased by $r$. Compared to the original:", ["Increase $= \\pi(2rR + r^2)$", "Increase $= 2\\pi Rr + \\pi r^2$", "New area $= \\pi(R + r)^2$", "Increase $= \\pi(R+r)^2 - \\pi R^2$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A triangle has base $b$ and height $h$. If the base is doubled and the height halved:", ["The area stays the same", "The area is $\\frac{1}{2}bh$", "The area equals the original", "The area doubles"], [0, 1, 2]));
  q.push(ms("hard", "A circle is circumscribed about a square of side $s$. Correct statements:", ["Circle radius $= \\frac{s\\sqrt{2}}{2}$", "Circle area $= \\frac{\\pi s^2}{2}$", "Circle area $= \\frac{\\pi d^2}{4}$ where $d$ is the diagonal", "Square area $= s^2$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "Scaling a shape by factor $k$ scales its area by $k^2$.", true));
  q.push(tf("hard", "Increasing the radius of a circle by $2$ cm always increases its area by more than $4\\pi$ cm².", true, "Increase $= 4\\pi r + 4\\pi > 4\\pi$ for any $r > 0$."));
  q.push(tf("hard", "A rectangle with length doubled and width doubled has its area quadrupled.", true));
  q.push(tf("hard", "The area of a triangle is always half the area of a rectangle with the same base and height.", true));
  q.push(tf("hard", "If the diameter of a circle is doubled, its area doubles.", false, "The area quadruples."));
  // fill in the blank
  q.push(num("hard", "A rectangle's length is increased by $10\\%$ and width decreased by $10\\%$. The area changes by ___ % (use a negative sign for a decrease).", -1, 0));
  q.push(fill("hard", "The area of a square with diagonal $d$ is ___.", ["d^2/2", "\\frac{d^2}{2}", "d²/2", "(d^2)/2"]));
  q.push(fill("hard", "A circle has circumference $C$. Its area in terms of $C$ is ___.", ["C^2/(4\\pi)", "\\frac{C^2}{4\\pi}", "C²/(4π)", "C^2/(4pi)"]));
  q.push(fill("hard", "For a triangle with sides $a, b, c$ and semi-perimeter $s$, Heron's formula gives area = ___.", ["\\sqrt{s(s-a)(s-b)(s-c)}", "sqrt(s(s-a)(s-b)(s-c))", "√(s(s-a)(s-b)(s-c))"]));
  q.push(fill("hard", "A square has side $s$ with an inscribed circle. The area between them is ___.", ["s^2-\\frac{\\pi s^2}{4}", "s^2 - \\pi s^2/4", "s²-πs²/4", "s^2-pi*s^2/4"]));

  return q;
}

// ── 5.7 Volume ───────────────────────────────────────────────
export function gen57() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The volume of a cube with side length $4$ cm is:", ["$16$ cm³", "$64$ cm³", "$48$ cm³", "$12$ cm³"], 1, "$4^3 = 64$."));
  q.push(mc("easy", "The volume of a rectangular prism with length $5$ cm, width $3$ cm, height $2$ cm is:", ["$10$ cm³", "$15$ cm³", "$30$ cm³", "$60$ cm³"], 2, "$5 \\times 3 \\times 2 = 30$."));
  q.push(mc("easy", "The volume of a cylinder with radius $3$ cm and height $7$ cm (use $\\pi \\approx \\frac{22}{7}$) is:", ["$66$ cm³", "$198$ cm³", "$44$ cm³", "$154$ cm³"], 1, "$\\pi r^2 h = \\frac{22}{7} \\times 9 \\times 7 = 198$."));
  q.push(mc("easy", "The volume of a sphere with radius $3$ cm (use $\\pi \\approx 3.14$) is approximately:", ["$36$ cm³", "$113.04$ cm³", "$28.26$ cm³", "$339.12$ cm³"], 1, "$\\frac{4}{3}\\pi r^3 = \\frac{4}{3} \\times 3.14 \\times 27 = 113.04$."));
  q.push(mc("easy", "The volume of a triangular prism with base area $12$ cm² and height $5$ cm is:", ["$60$ cm³", "$30$ cm³", "$120$ cm³", "$17$ cm³"], 0, "$12 \\times 5 = 60$."));
  // multiple select
  q.push(ms("easy", "Which formulas for volume are correct?", ["Cube: $V = s^3$", "Rectangular prism: $V = l \\times w \\times h$", "Cylinder: $V = \\pi r^2 h$", "Sphere: $V = \\frac{4}{3}\\pi r^3$"], [0, 1, 2, 3]));
  q.push(ms("easy", "A rectangular prism has volume $60$ cm³. Which dimensions are possible?", ["$2 \\times 3 \\times 10$", "$3 \\times 4 \\times 5$", "$2 \\times 5 \\times 6$", "$1 \\times 6 \\times 10$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which changes increase the volume of a cube?", ["Doubling the side length", "Multiplying the side by $3$", "Increasing the side by $10\\%$", "Decreasing the side by $50\\%$"], [0, 1, 2]));
  q.push(mc("easy", "The volume of a cylinder with radius $r$ and height $h$ is:", ["$\\pi r^2 h$", "$\\pi r h$", "$\\frac{1}{3}\\pi r^2 h$", "$2\\pi r h$"], 0));
  q.push(ms("easy", "A sphere has its radius doubled. Its volume:", ["Octuples (×8)", "Becomes $8$ times the original", "Is $\\frac{4}{3}\\pi (2r)^3$", "Is $8 \\times \\frac{4}{3}\\pi r^3$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("easy", "The volume of a cube with side $s$ is $s^3$.", true));
  q.push(tf("easy", "The volume of a cylinder is $\\pi r^2 h$.", true));
  q.push(tf("easy", "Doubling the radius of a sphere doubles its volume.", false, "It multiplies the volume by $8$."));
  q.push(tf("easy", "Volume is measured in cubic units.", true));
  q.push(tf("easy", "A rectangular prism and a cylinder can have the same volume.", true));
  // fill in the blank
  q.push(num("easy", "Volume of a cube with side $5$ cm = ___ cm³.", 125, 0));
  q.push(num("easy", "Volume of a rectangular prism $4$ cm × $3$ cm × $2$ cm = ___ cm³.", 24, 0));
  q.push(num("easy", "Volume of a cylinder with radius $5$ cm and height $10$ cm (use $\\pi = 3.14$) ≈ ___ cm³.", 785, 0.5));
  q.push(num("easy", "Volume of a sphere with radius $6$ cm (use $\\pi \\approx 3.14$) ≈ ___ cm³.", 904.32, 0.5));
  q.push(num("easy", "Volume of a triangular prism with base area $15$ cm² and height $4$ cm = ___ cm³.", 60, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "A rectangular prism has volume $162$ cm³ and dimensions in ratio $3:2:1$. The longest side is:", ["$6$ cm", "$9$ cm", "$12$ cm", "$18$ cm"], 1, "$3k \\cdot 2k \\cdot k = 6k^3 = 162 \\Rightarrow k^3 = 27 \\Rightarrow k = 3$; longest $= 3k = 9$."));
  q.push(mc("medium", "A cylinder has volume $150\\pi$ cm³ and radius $5$ cm. Its height is:", ["$3$ cm", "$6$ cm", "$10$ cm", "$30$ cm"], 1, "$25h = 150 \\Rightarrow h = 6$."));
  q.push(mc("medium", "A cone has radius $3$ cm and height $4$ cm. Its volume (use $\\pi \\approx 3.14$) is:", ["$12.56$ cm³", "$37.68$ cm³", "$113.04$ cm³", "$50.24$ cm³"], 1, "$\\frac{1}{3} \\times 3.14 \\times 9 \\times 4 = 37.68$."));
  q.push(mc("medium", "A sphere has volume $288\\pi$ cm³. Its radius is:", ["$6$ cm", "$8$ cm", "$12$ cm", "$4$ cm"], 0, "$\\frac{4}{3}r^3 = 288 \\Rightarrow r^3 = 216 \\Rightarrow r = 6$."));
  q.push(mc("medium", "All dimensions of a rectangular prism are doubled. Its volume becomes:", ["Doubled", "Quadrupled", "Octupled (×8)", "Unchanged"], 2, "Volume scales by $k^3 = 2^3 = 8$."));
  // multiple select
  q.push(ms("medium", "A cylinder and a cone have the same radius and height. Which statements are true?", ["The cylinder's volume is $3\\times$ the cone's", "The cone's volume is $\\frac{1}{3}$ of the cylinder's", "Three such cones fill the cylinder", "Cone volume $= \\frac{1}{3}\\pi r^2 h$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A rectangular prism has dimensions $l, w, h$. If all are increased by $20\\%$:", ["The volume increases by $72.8\\%$", "New volume $= 1.728\\,lwh$", "Each dimension becomes $1.2\\times$ the original", "The volume triples"], [0, 1, 2], "$1.2^3 = 1.728$, a $72.8\\%$ increase."));
  q.push(ms("medium", "Which volume formulas for pyramids/cones are correct?", ["Pyramid: $V = \\frac{1}{3} \\times$ base area $\\times$ height", "Cone: $V = \\frac{1}{3}\\pi r^2 h$", "Square pyramid: $V = \\frac{1}{3}s^2 h$", "Cone: $V = \\frac{\\pi r^2 h}{3}$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A sphere has radius $r$. If the radius is tripled, the volume:", ["Multiplies by $27$", "Is $27$ times the original", "Is $\\frac{4}{3}\\pi (3r)^3$", "Is $27 \\times \\frac{4}{3}\\pi r^3$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A rectangular tank measures $50$ cm × $30$ cm × $20$ cm. Which statements are true?", ["Volume $= 30{,}000$ cm³", "Capacity $= 30$ L", "$1$ cm³ $= 1$ mL", "$30{,}000$ cm³ $= 30$ L"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "Doubling all dimensions of a rectangular prism multiplies the volume by $8$.", true));
  q.push(tf("medium", "A cone has volume $\\frac{1}{3}\\pi r^2 h$.", true));
  q.push(tf("medium", "The volume of a sphere is $\\frac{4}{3}\\pi r^3$.", true));
  q.push(tf("medium", "$1$ cm³ $= 1$ L.", false, "$1$ cm³ $= 1$ mL; $1000$ cm³ $= 1$ L."));
  q.push(tf("medium", "A pyramid with base area $B$ and height $h$ has volume $\\frac{1}{3}Bh$.", true));
  // fill in the blank
  q.push(num("medium", "A cylinder has volume $200\\pi$ cm³ and height $8$ cm. Its radius = ___ cm.", 5, 0));
  q.push(num("medium", "A cone has radius $6$ cm and height $8$ cm. Its volume (use $\\pi \\approx 3.14$) = ___ cm³.", 301.44, 0.5));
  q.push(num("medium", "A rectangular prism has dimensions $x, 2x, 3x$ and volume $384$ cm³. Then $x =$ ___ cm.", 4, 0));
  q.push(num("medium", "A sphere has radius $9$ cm. Its volume (use $\\pi \\approx 3.14$) ≈ ___ cm³.", 3052.08, 0.5));
  q.push(num("medium", "A prism with base area $25$ cm² and height $10$ cm has volume ___ cm³.", 250, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "A cylinder is inscribed in a cube of side $s$. The cylinder's volume is:", ["$\\frac{\\pi s^3}{4}$", "$\\frac{\\pi s^3}{2}$", "$\\pi s^3$", "$\\frac{\\pi s^3}{6}$"], 0, "Radius $= \\frac{s}{2}$, height $= s$; $V = \\pi(\\frac{s}{2})^2 s = \\frac{\\pi s^3}{4}$."));
  q.push(mc("hard", "A cone and a cylinder share the same radius and height. The cone is melted and recast into a sphere. If the cylinder's volume is $V$, the sphere's radius is:", ["$\\sqrt[3]{\\frac{3V}{4\\pi}}$", "$\\sqrt[3]{\\frac{V}{4\\pi}}$", "$\\sqrt[3]{\\frac{V}{2\\pi}}$", "$\\sqrt[3]{\\frac{V}{3\\pi}}$"], 1, "Cone volume $= \\frac{V}{3} = \\frac{4}{3}\\pi r^3 \\Rightarrow r^3 = \\frac{V}{4\\pi}$."));
  q.push(mc("hard", "A rectangular prism has surface area $94$ cm² and dimensions $x, x+1, x+2$. Its volume is:", ["$30$ cm³", "$60$ cm³", "$120$ cm³", "$24$ cm³"], 1, "$3x^2 + 6x + 2 = 47 \\Rightarrow x = 3$; sides $3, 4, 5$; $V = 60$."));
  q.push(mc("hard", "A hemisphere of radius $r$ has volume:", ["$\\frac{2}{3}\\pi r^3$", "$\\frac{4}{3}\\pi r^3$", "$\\frac{1}{3}\\pi r^3$", "$\\pi r^3$"], 0, "$\\frac{1}{2} \\times \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi r^3$."));
  q.push(mc("hard", "A cone of height $h$ and radius $r$ is cut parallel to the base halfway up. The small top cone's volume is what fraction of the original?", ["$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{1}{3}$"], 0, "Linear scale $\\frac{1}{2} \\Rightarrow$ volume scale $(\\frac{1}{2})^3 = \\frac{1}{8}$."));
  // multiple select
  q.push(ms("hard", "A rectangular prism ($l \\times w \\times h$) and a cylinder (radius $r$, height $h$) have the same volume. Then:", ["$lwh = \\pi r^2 h$", "$\\pi r^2 = lw$", "$r = \\sqrt{\\frac{lw}{\\pi}}$", "The common height $h$ cancels out"], [0, 1, 2, 3]));
  q.push(ms("hard", "A cone of radius $r$ and height $h$ is melted and recast into a cylinder of the same radius. The cylinder's height is:", ["$\\frac{h}{3}$", "$\\frac{1}{3}h$", "One-third of the cone's height", "$3h$"], [0, 1, 2], "$\\frac{1}{3}\\pi r^2 h = \\pi r^2 H \\Rightarrow H = \\frac{h}{3}$."));
  q.push(ms("hard", "A sphere of radius $r$ is inscribed in a cube. Correct statements:", ["Cube side $= 2r$", "Cube volume $= 8r^3$", "Sphere volume $= \\frac{4}{3}\\pi r^3$", "Ratio of sphere to cube volume $= \\frac{\\pi}{6}$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A cone and a hemisphere have the same radius and the same volume. Then:", ["The cone's height $= 2r$", "$\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3$", "$h = 2r$", "The cone's height equals the diameter"], [0, 1, 2, 3]));
  q.push(ms("hard", "A cylinder (radius $R$) holds water; a sphere of radius $r$ is dropped in and fully submerged. The water level rises by:", ["$\\frac{4}{3}\\cdot\\frac{r^3}{R^2}$", "$\\frac{4r^3}{3R^2}$", "$\\frac{\\text{sphere volume}}{\\text{cylinder base area}}$", "$\\frac{4}{3}\\cdot\\frac{\\pi r^3}{\\pi R^2}$"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "The volume of a pyramid is $\\frac{1}{3} \\times$ base area $\\times$ height.", true));
  q.push(tf("hard", "Doubling the radius of a cone and halving its height doubles the volume.", true, "$\\frac{1}{3}\\pi (2r)^2 (\\frac{h}{2}) = 2 \\times \\frac{1}{3}\\pi r^2 h$."));
  q.push(tf("hard", "A hemisphere is half a sphere.", true));
  q.push(tf("hard", "$1$ L $= 1000$ cm³.", true));
  q.push(tf("hard", "A cylinder and a cone with the same radius and height have volumes in ratio $3:1$.", true));
  // fill in the blank
  q.push(fill("hard", "A cube of side $s$ has a sphere inscribed. The sphere's volume is ___.", ["\\frac{\\pi s^3}{6}", "\\pi s^3/6", "πs³/6", "pi s^3/6", "(pi s^3)/6"]));
  q.push(fill("hard", "A cylinder has radius $r$ and height $h$. A cone of the same radius and height has volume ___.", ["\\frac{1}{3}\\pi r^2 h", "(1/3)\\pi r^2 h", "\\pi r^2 h/3", "πr²h/3", "pi r^2 h/3"]));
  q.push(num("hard", "A rectangular prism has dimensions $x, x+2, x+4$ and volume $192$ cm³. Then $x =$ ___ cm.", 4, 0));
  q.push(fill("hard", "A sphere has surface area $144\\pi$ cm². Its volume = ___ cm³.", ["288\\pi", "288π", "288 pi", "288pi"]));
  q.push(num("hard", "A cone has volume $96\\pi$ cm³ and height $8$ cm. Its radius = ___ cm.", 6, 0));

  return q;
}

// ── 5.8 Surface Area ─────────────────────────────────────────
export function gen58() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  // single choice
  q.push(mc("easy", "The surface area of a cube with side length $4$ cm is:", ["$16$ cm²", "$64$ cm²", "$96$ cm²", "$48$ cm²"], 2, "$6 \\times 4^2 = 96$."));
  q.push(mc("easy", "The surface area of a rectangular prism with length $5$ cm, width $3$ cm, height $2$ cm is:", ["$30$ cm²", "$62$ cm²", "$15$ cm²", "$60$ cm²"], 1, "$2(15+10+6) = 62$."));
  q.push(mc("easy", "The surface area of a cylinder with radius $3$ cm and height $5$ cm (use $\\pi \\approx 3.14$) is approximately:", ["$94.2$ cm²", "$150.72$ cm²", "$282.6$ cm²", "$56.52$ cm²"], 1, "$2\\pi rh + 2\\pi r^2 = 94.2 + 56.52 = 150.72$."));
  q.push(mc("easy", "The surface area of a sphere with radius $3$ cm (use $\\pi \\approx 3.14$) is approximately:", ["$113.04$ cm²", "$36$ cm²", "$28.26$ cm²", "$339.12$ cm²"], 0, "$4\\pi r^2 = 4(3.14)(9) = 113.04$."));
  q.push(mc("easy", "The lateral surface area of a cylinder (excluding the bases) is:", ["$2\\pi r h$", "$\\pi r^2 h$", "$2\\pi r^2$", "$\\pi r^2$"], 0));
  // multiple select
  q.push(ms("easy", "Which formulas for surface area are correct?", ["Cube: $SA = 6s^2$", "Rectangular prism: $SA = 2(lw + lh + wh)$", "Cylinder: $SA = 2\\pi r^2 + 2\\pi rh$", "Sphere: $SA = 4\\pi r^2$"], [0, 1, 2, 3]));
  q.push(mc("easy", "A cube has surface area $54$ cm². Its side length is:", ["$3$ cm", "$9$ cm", "$6$ cm", "$27$ cm"], 0, "$6s^2 = 54 \\Rightarrow s^2 = 9 \\Rightarrow s = 3$."));
  q.push(ms("easy", "Which changes increase the surface area of a cube?", ["Doubling the side length", "Multiplying the side by $3$", "Increasing the side by $50\\%$", "Decreasing the side by $20\\%$"], [0, 1, 2]));
  q.push(ms("easy", "The surface area of a sphere with radius $r$ (and diameter $d = 2r$) is:", ["$4\\pi r^2$", "$\\pi d^2$", "$2\\pi r^2$", "$\\pi r^2$"], [0, 1], "$4\\pi r^2 = \\pi(2r)^2 = \\pi d^2$."));
  q.push(ms("easy", "The lateral surface area of a rectangular prism (excluding top and bottom) is:", ["$2h(l + w)$", "$2(lh + wh)$", "$2(lw)$", "$lwh$"], [0, 1]));
  // true / false
  q.push(tf("easy", "The surface area of a cube with side $s$ is $6s^2$.", true));
  q.push(tf("easy", "The surface area of a sphere is $4\\pi r^2$.", true));
  q.push(tf("easy", "Doubling the radius of a sphere doubles its surface area.", false, "It quadruples the surface area."));
  q.push(tf("easy", "The surface area of a cylinder includes two circular bases.", true));
  q.push(tf("easy", "Surface area is measured in square units.", true));
  // fill in the blank
  q.push(num("easy", "Surface area of a cube with side $6$ cm = ___ cm².", 216, 0));
  q.push(num("easy", "Surface area of a rectangular prism $4$ cm × $3$ cm × $2$ cm = ___ cm².", 52, 0));
  q.push(num("easy", "Surface area of a cylinder with radius $5$ cm and height $10$ cm (use $\\pi = 3.14$) ≈ ___ cm².", 471, 0.5));
  q.push(num("easy", "Surface area of a sphere with radius $4$ cm (use $\\pi \\approx 3.14$) ≈ ___ cm².", 200.96, 0.5));
  q.push(num("easy", "If a cube has surface area $150$ cm², its side = ___ cm.", 5, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  // single choice
  q.push(mc("medium", "A rectangular prism has surface area $94$ cm² and dimensions $x, x+1, x+2$. The value of $x$ is:", ["$2$", "$3$", "$4$", "$5$"], 1, "$3x^2 + 6x + 2 = 47 \\Rightarrow x = 3$."));
  q.push(mc("medium", "A cylinder has surface area $150\\pi$ cm² and radius $5$ cm. Its height is:", ["$5$ cm", "$10$ cm", "$15$ cm", "$20$ cm"], 1, "$10\\pi h + 50\\pi = 150\\pi \\Rightarrow h = 10$."));
  q.push(mc("medium", "A cone has radius $3$ cm and slant height $5$ cm. Its lateral surface area is:", ["$15\\pi$ cm²", "$24\\pi$ cm²", "$9\\pi$ cm²", "$48\\pi$ cm²"], 0, "$\\pi r l = \\pi \\times 3 \\times 5 = 15\\pi$."));
  q.push(mc("medium", "A sphere has surface area $144\\pi$ cm². Its radius is:", ["$6$ cm", "$12$ cm", "$36$ cm", "$4$ cm"], 0, "$4\\pi r^2 = 144\\pi \\Rightarrow r^2 = 36 \\Rightarrow r = 6$."));
  q.push(mc("medium", "All dimensions of a rectangular prism are doubled. Its surface area becomes:", ["Doubled", "Quadrupled", "Octupled", "Unchanged"], 1, "Surface area scales by $k^2 = 2^2 = 4$."));
  // multiple select
  q.push(ms("medium", "A cylinder and a sphere have the same radius and equal surface areas. Which statements are true?", ["The cylinder's height $= r$", "$2\\pi rh + 2\\pi r^2 = 4\\pi r^2$", "$2\\pi rh = 2\\pi r^2$", "$h = r$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A rectangular prism has dimensions $l, w, h$. If all are increased by $20\\%$:", ["The surface area increases by $44\\%$", "New $SA = 1.44 \\times$ the original", "Each dimension becomes $1.2\\times$ the original", "The surface area doubles"], [0, 1, 2], "$1.2^2 = 1.44$, a $44\\%$ increase."));
  q.push(ms("medium", "Which surface-area formulas for pyramids/cones are correct?", ["Pyramid: $SA = $ base area $+ \\frac{1}{2} \\times$ perimeter $\\times$ slant height", "Cone: $SA = \\pi r^2 + \\pi r l$", "Square pyramid: $SA = s^2 + 2s\\ell$", "Cone: $SA = \\pi r(r + l)$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A sphere has radius $r$. If the radius is tripled, the surface area:", ["Multiplies by $9$", "Is $9$ times the original", "Is $4\\pi (3r)^2$", "Is $9 \\times 4\\pi r^2$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A cylinder has radius $r$ and height $h$. Which statements about its surface area are true?", ["Lateral $SA = 2\\pi rh$", "Total $SA = 2\\pi r(r+h)$", "Total $SA = 2\\pi r^2 + 2\\pi rh$", "Lateral $SA = $ circumference $\\times$ height"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("medium", "Doubling all dimensions of a rectangular prism quadruples its surface area.", true));
  q.push(tf("medium", "The surface area of a cone is $\\pi r(r + l)$.", true));
  q.push(tf("medium", "The surface area of a sphere is $4\\pi r^2$.", true));
  q.push(tf("medium", "The lateral surface area of a cylinder is $2\\pi r h$.", true));
  q.push(tf("medium", "A cube has surface area $6s^2$, so if $s = 10$, then $SA = 600$.", true));
  // fill in the blank
  q.push(num("medium", "A rectangular prism has $SA$ $148$ cm², length $6$ cm, width $5$ cm. Its height = ___ cm.", 4, 0));
  q.push(fill("medium", "A cone has radius $4$ cm and slant height $6$ cm. Its lateral $SA$ = ___ cm².", ["24\\pi", "24π", "24 pi", "24pi"]));
  q.push(num("medium", "A sphere has surface area $100\\pi$ cm². Its radius = ___ cm.", 5, 0));
  q.push(num("medium", "A cylinder has radius $7$ cm and height $10$ cm. Its total $SA$ (use $\\pi = \\frac{22}{7}$) = ___ cm².", 748, 0));
  q.push(num("medium", "If a cube has surface area $216$ cm², its side = ___ cm.", 6, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  // single choice
  q.push(mc("hard", "A cylinder is inscribed in a cube of side $s$. The cylinder's surface area is:", ["$\\frac{3\\pi s^2}{2}$", "$2\\pi s^2$", "$\\pi s^2$", "$\\frac{5\\pi s^2}{2}$"], 0, "Radius $\\frac{s}{2}$, height $s$; $SA = 2\\pi(\\frac{s}{2})s + 2\\pi(\\frac{s}{2})^2 = \\pi s^2 + \\frac{\\pi s^2}{2} = \\frac{3\\pi s^2}{2}$."));
  q.push(mc("hard", "A hemisphere of radius $r$ has surface area (including the base) of:", ["$3\\pi r^2$", "$2\\pi r^2$", "$\\pi r^2$", "$4\\pi r^2$"], 0, "Curved $2\\pi r^2$ + base $\\pi r^2 = 3\\pi r^2$."));
  q.push(mc("hard", "A rectangular prism has dimensions $x, 2x, 3x$ and surface area $88$ cm². Then $x =$", ["$2$ cm", "$4$ cm", "$6$ cm", "$1$ cm"], 0, "$2(2x^2 + 3x^2 + 6x^2) = 22x^2 = 88 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$."));
  q.push(mc("hard", "A sphere and a cube have the same surface area. The ratio of their volumes (sphere : cube) is:", ["$\\sqrt{\\frac{6}{\\pi}}$", "$\\sqrt{\\frac{\\pi}{6}}$", "$\\frac{\\sqrt{\\pi}}{6}$", "$\\frac{\\pi}{6}$"], 0, "$4\\pi r^2 = 6s^2$; the volume ratio works out to $\\sqrt{\\frac{6}{\\pi}} \\approx 1.38$ (the sphere is more volume-efficient)."));
  // multiple select
  q.push(ms("hard", "A cone and a cylinder have the same radius and height. The ratio of their total surface areas (cone : cylinder) is:", ["$1 : 1$", "$1 : 2$", "$(r + l) : 2(r + h)$", "$\\frac{r+l}{2(r+h)}$"], [2, 3], "Cone $SA = \\pi r(r+l)$, cylinder $SA = 2\\pi r(r+h)$."));
  // multiple select
  q.push(ms("hard", "A rectangular prism and a cylinder (radius $r$, height $h$) have the same surface area. Then:", ["$2(lw+lh+wh) = 2\\pi r^2 + 2\\pi rh$", "$lw+lh+wh = \\pi r(r+h)$", "Equivalently $\\pi r^2 + \\pi rh = lw+lh+wh$", "$r = \\frac{lw+lh+wh}{\\pi(r+h)}$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A cone (radius $r$, slant height $l$) is melted and recast into a cylinder of the same radius. The cylinder's height is:", ["$\\frac{r+l}{2}$", "$\\frac{r+l}{3}$", "Determined by volume preservation, not surface area", "Not determinable from surface area alone"], [2, 3], "Melting conserves volume; surface area is irrelevant here."));
  q.push(ms("hard", "A sphere of radius $r$ is inscribed in a cube. Correct statements:", ["Cube side $= 2r$", "Cube $SA = 24r^2$", "Sphere $SA = 4\\pi r^2$", "Ratio of sphere to cube $SA = \\frac{\\pi}{6}$"], [0, 1, 2, 3], "Cube $SA = 6(2r)^2 = 24r^2$; ratio $= \\frac{4\\pi r^2}{24r^2} = \\frac{\\pi}{6}$."));
  q.push(ms("hard", "A cylinder is open at the top (no top lid). Its surface area is:", ["$2\\pi rh + \\pi r^2$", "$\\pi r(2h + r)$", "$2\\pi rh + 2\\pi r^2$", "$2\\pi r(h + r)$"], [0, 1], "One base + the curved side $= 2\\pi rh + \\pi r^2 = \\pi r(2h+r)$."));
  q.push(ms("hard", "A sphere and a hemisphere have the same radius. Which statements are true?", ["The sphere's $SA$ is greater than the hemisphere's", "Sphere $SA = 4\\pi r^2$", "Hemisphere total $SA = 3\\pi r^2$ (with base)", "They cannot have equal surface area"], [0, 1, 2, 3]));
  // true / false
  q.push(tf("hard", "The surface area of a hemisphere (including the base) is $3\\pi r^2$.", true));
  q.push(tf("hard", "Doubling the radius of a sphere quadruples its surface area.", true));
  q.push(tf("hard", "The surface area of a cone is $\\pi r^2 + \\pi r l$, where $l$ is the slant height.", true));
  q.push(tf("hard", "A cylinder and a cone with the same radius and height have surface areas in ratio $2(r+h) : (r+l)$.", true));
  q.push(tf("hard", "Surface area is always numerically greater than volume for any solid.", false, "It depends on the dimensions and units; not always true."));
  // fill in the blank
  q.push(fill("hard", "A cube of side $s$ has a sphere circumscribed about it. The sphere's surface area is ___.", ["3\\pi s^2", "3πs²", "3 pi s^2", "3pi s^2", "3\\pi s^{2}"]));
  q.push(fill("hard", "A cone has radius $r$ and slant height $l$. Its total surface area = ___.", ["\\pi r(r+l)", "πr(r+l)", "pi r(r+l)", "\\pi r (r+l)", "\\pi r^2 + \\pi r l", "πr²+πrl"]));
  q.push(num("hard", "A rectangular prism has dimensions $x, x+1, x+2$. If $SA = 94$, then $x =$ ___.", 3, 0));
  q.push(fill("hard", "A hemisphere of radius $6$ cm has surface area (including the base) = ___ cm².", ["108\\pi", "108π", "108 pi", "108pi"]));
  q.push(fill("hard", "The ratio of the surface areas of two spheres with radii $r$ and $2r$ is ___.", ["1:4", "1 : 4", "1/4", "\\frac{1}{4}"]));

  return q;
}

// ── 6.1 Big Data & Its Implications ──────────────────────────
// User-authored 60-question set (2026-06-16), answer key verified (clean).
export function gen61() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "Big data refers to data that is:", ["Small and easy to analyze", "Too large or complex for traditional processing", "Only numbers", "Always structured in tables"], 1));
  q.push(mc("easy", "The three main V's of big data are:", ["Volume, Value, Vision", "Volume, Velocity, Variety", "Velocity, Vision, Variety", "Volume, Value, Velocity"], 1));
  q.push(mc("easy", "Which is an example of a source of big data?", ["A class attendance sheet", "Social media posts", "A shopping list", "A phone book"], 1));
  q.push(mc("easy", "The V that describes the speed at which data is generated is:", ["Volume", "Variety", "Velocity", "Value"], 2));
  q.push(mc("easy", "Which data storage unit is the largest?", ["Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)", "Petabyte (PB)"], 3));
  q.push(ms("easy", "Which are examples of big data sources?", ["Tweets from Twitter", "Weather sensor data", "A list of 10 students", "Online shopping transactions"], [0, 1, 3]));
  q.push(ms("easy", "Which are characteristics of big data?", ["Large volume", "High velocity", "Wide variety of formats", "Low storage requirements"], [0, 1, 2]));
  q.push(ms("easy", "Which statements about big data are true?", ["It can be structured or unstructured", "It is generated by humans and machines", "It is always stored in spreadsheets", "It can be used for decision-making"], [0, 1, 3]));
  q.push(ms("easy", "Which are ethical concerns related to big data?", ["Privacy invasion", "Data security", "Faster internet speeds", "Bias in algorithms"], [0, 1, 3]));
  q.push(ms("easy", "Which data storage unit conversions are correct?", ["1 KB = 1024 bytes", "1 MB = 1024 KB", "1 GB = 1024 MB", "1 TB = 1024 GB"], [0, 1, 2, 3]));
  q.push(tf("easy", "Big data is only about large amounts of data.", false, "It also involves velocity and variety."));
  q.push(tf("easy", "Social media platforms generate large amounts of big data.", true));
  q.push(tf("easy", "Big data can help businesses understand customer behaviour.", true));
  q.push(tf("easy", "All big data is structured in tables.", false, "Much of it is unstructured."));
  q.push(tf("easy", "Privacy is not a concern with big data.", false));
  q.push(fill("easy", "The three V's of big data are Volume, Velocity, and ___.", ["Variety", "variety"]));
  q.push(num("easy", "1 Terabyte = ___ Gigabytes (using 1024).", 1024, 0));
  q.push(fill("easy", "Facebook and Twitter generate large amounts of ___.", ["big data", "bigdata", "big-data"]));
  q.push(fill("easy", "Big data can be used in healthcare to improve ___.", ["patient care", "patient outcomes", "care", "healthcare"]));
  q.push(fill("easy", "The ethical issue of personal data being collected or used without permission is called a ___ concern.", ["privacy"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Which V of big data refers to the different formats (text, images, video, audio)?", ["Volume", "Velocity", "Variety", "Veracity"], 2));
  q.push(mc("medium", "A company has collected 10 TB of data. This relates to which V?", ["Velocity", "Volume", "Variety", "Veracity"], 1));
  q.push(mc("medium", "Which of the following is NOT a source of big data?", ["IoT sensors", "Social media", "A handwritten list of 5 items", "Online banking transactions"], 2));
  q.push(mc("medium", "An algorithm that recommends products based on past purchases is an example of:", ["Data bias", "Data analytics", "Data storage", "Data variety"], 1));
  q.push(mc("medium", "If a company uses customer data without consent, this violates:", ["Data storage policies", "Data privacy laws", "Data velocity", "Data variety"], 1));
  q.push(ms("medium", "Which are applications of big data?", ["Personalized marketing", "Traffic prediction", "Weather forecasting", "Counting students in a classroom"], [0, 1, 2]));
  q.push(ms("medium", "Which are true about the volume of big data?", ["It refers to the amount of data", "It is measured in TB, PB, EB", "It is growing exponentially", "It is always stored in spreadsheets"], [0, 1, 2]));
  q.push(ms("medium", "Which are true about velocity in big data?", ["It refers to the speed of data generation", "Real-time data processing is an example", "Social media posts are generated quickly", "Velocity is the same as volume"], [0, 1, 2]));
  q.push(ms("medium", "Which ethical implications are associated with big data?", ["Data can be used to discriminate", "Personal information can be exposed", "Algorithms can be biased", "Data storage is always free"], [0, 1, 2]));
  q.push(ms("medium", "A city uses traffic cameras to monitor congestion. This involves:", ["Big data", "Real-time data (velocity)", "Video data (variety)", "Privacy concerns"], [0, 1, 2, 3]));
  q.push(tf("medium", "Big data can be unstructured.", true));
  q.push(tf("medium", "Velocity refers to the variety of data formats.", false, "Velocity refers to the speed of data."));
  q.push(tf("medium", "Big data analytics can help in fraud detection.", true));
  q.push(tf("medium", "Data bias means the data set is too large.", false, "Bias means the data unfairly favours certain outcomes."));
  q.push(tf("medium", "Storing big data requires large amounts of storage space.", true));
  q.push(fill("medium", "The V that describes the speed of data generation is ___.", ["Velocity", "velocity"]));
  q.push(num("medium", "1 Petabyte = ___ Terabytes (using 1024).", 1024, 0));
  q.push(fill("medium", "A company using big data to predict sales is using ___.", ["data analytics", "analytics", "big data analytics"]));
  q.push(fill("medium", "Unauthorized use of personal data is a violation of ___.", ["privacy", "data privacy"]));
  q.push(fill("medium", "A fitness tracker collecting heart-rate data is an example of a source of ___.", ["big data", "bigdata", "big-data"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A social media platform processes 500 million tweets per day. This is an example of:", ["High volume and high velocity", "High variety only", "Low volume", "High veracity"], 0));
  q.push(mc("hard", "Which of the following is a challenge of big data?", ["Storing large datasets", "Processing unstructured data", "Ensuring data privacy and security", "All of the above"], 3));
  q.push(mc("hard", "A bank's loan-approval algorithm rejects applications from certain neighbourhoods. This is an example of:", ["Data volume", "Data bias", "Data velocity", "Data variety"], 1));
  q.push(mc("hard", "A company collects data from social media, purchase history, and website clicks. It is mainly dealing with:", ["High velocity", "High variety", "High volume", "High veracity"], 1));
  q.push(mc("hard", "The world's data is projected to reach 175 zettabytes by 2025. 1 zettabyte equals about:", ["$10^{21}$ bytes", "$10^{24}$ bytes", "$10^{18}$ bytes", "$10^{15}$ bytes"], 0));
  q.push(ms("hard", "Which are true about big data implications?", ["It can improve decision-making", "It raises concerns about surveillance", "It can lead to job displacement", "It always increases costs"], [0, 1, 2]));
  q.push(ms("hard", "Which real-world applications use big data?", ["Netflix movie recommendations", "Google Maps traffic prediction", "Amazon product suggestions", "A doctor examining a single patient"], [0, 1, 2]));
  q.push(ms("hard", "Which ethical concerns are associated with big data?", ["Lack of transparency in algorithms", "Data breaches", "Manipulation of public opinion", "Faster data processing"], [0, 1, 2]));
  q.push(ms("hard", "Which statements about data storage units are correct?", ["1 ZB = 1024 EB", "1 EB = 1024 PB", "1 PB = 1024 TB", "1 TB = 1024 GB"], [0, 1, 2, 3]));
  q.push(ms("hard", "A city uses smart meters to monitor water usage. This involves:", ["Big data", "Real-time monitoring (velocity)", "Sensor data (variety)", "Privacy issues"], [0, 1, 2, 3]));
  q.push(tf("hard", "Big data can be used to predict disease outbreaks.", true));
  q.push(tf("hard", "Veracity refers to the truthfulness or accuracy of data.", true));
  q.push(tf("hard", "Data bias can lead to unfair treatment of certain groups.", true));
  q.push(tf("hard", "All big data is numerical.", false));
  q.push(tf("hard", "Big data analytics always guarantees correct predictions.", false));
  q.push(fill("hard", "The V that refers to the trustworthiness of data is ___.", ["Veracity", "veracity"]));
  q.push(num("hard", "1 Zettabyte = ___ Exabytes (using 1024).", 1024, 0));
  q.push(fill("hard", "A hospital using patient data to predict health risks is applying ___.", ["big data analytics", "data analytics", "analytics"]));
  q.push(fill("hard", "An algorithm that favours one group over another is an example of ___.", ["bias", "data bias", "algorithmic bias"]));
  q.push(fill("hard", "The use of personal data without consent violates ___ laws.", ["privacy", "data privacy"]));

  return q;
}

// ── 6.2 One-Variable Data & Statistics ───────────────────────
function median(a) { const s = [...a].sort((x, y) => x - y); const n = s.length, m = n >> 1; return n % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
function modeOf(a) { const c = {}; let best = a[0], bc = 0; for (const x of a) { c[x] = (c[x] || 0) + 1; if (c[x] > bc) { bc = c[x]; best = x; } } return best; }
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen62() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "The average of a set of numbers is called the:", ["Median", "Mode", "Mean", "Range"], 2));
  q.push(mc("easy", "The middle value in an ordered data set is the:", ["Mean", "Median", "Mode", "Range"], 1));
  q.push(mc("easy", "The value that appears most often in a data set is the:", ["Mean", "Median", "Mode", "Range"], 2));
  q.push(mc("easy", "The difference between the maximum and minimum values is the:", ["Mean", "Median", "Mode", "Range"], 3));
  q.push(mc("easy", "Find the mean of $4, 6, 8, 10$:", ["$6$", "$7$", "$8$", "$9$"], 1, "$28 \\div 4 = 7$."));
  q.push(ms("easy", "Which are measures of central tendency?", ["Mean", "Median", "Mode", "Range"], [0, 1, 2]));
  q.push(ms("easy", "For the data set $2, 3, 3, 5, 7$, which are true?", ["Mean $= 4$", "Median $= 3$", "Mode $= 3$", "Range $= 5$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are measures of spread?", ["Range", "Median", "Interquartile range", "Mean"], [0, 2]));
  q.push(ms("easy", "A data set has values $1, 2, 2, 3, 4, 5, 5$. Which are true?", ["Mode $= 2$ and $5$ (bimodal)", "Median $= 3$", "Mean $\\approx 3.14$", "Range $= 4$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are true about the median?", ["It is the middle value", "It is strongly affected by outliers", "It divides the data into two equal halves", "For even data sets, it is the average of the two middle values"], [0, 2, 3], "The median is resistant to outliers."));
  q.push(tf("easy", "The mean is the same as the average.", true));
  q.push(tf("easy", "The mode always exists.", false, "If every value occurs once, there is no mode."));
  q.push(tf("easy", "The median is always one of the data values.", false, "For even-sized sets it can be the average of the two middle values."));
  q.push(tf("easy", "The range is calculated by subtracting the smallest value from the largest.", true));
  q.push(tf("easy", "Outliers affect the median more than the mean.", false, "The mean is more affected by outliers."));
  q.push(num("easy", "The average of $5, 7, 9, 11$ is ___.", 8, 0));
  q.push(num("easy", "The median of $2, 4, 6, 8, 10$ is ___.", 6, 0));
  q.push(num("easy", "The mode of $1, 3, 3, 4, 5, 5, 5$ is ___.", 5, 0));
  q.push(num("easy", "The range of $12, 15, 18, 21, 24$ is ___.", 12, 0));
  q.push(fill("easy", "The middle value of an ordered data set is called the ___ (one word).", ["median"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Find the median of $3, 7, 8, 12, 15, 18$:", ["$8$", "$10$", "$12$", "$15$"], 1, "$(8 + 12) \\div 2 = 10$."));
  q.push(mc("medium", "Find the mean of $10, 12, 14, 16, 18, 20$:", ["$14$", "$15$", "$16$", "$17$"], 1, "$90 \\div 6 = 15$."));
  q.push(mc("medium", "A data set has $Q_1 = 5$, $Q_3 = 15$. The interquartile range (IQR) is:", ["$5$", "$10$", "$15$", "$20$"], 1, "$15 - 5 = 10$."));
  q.push(mc("medium", "The lower quartile $Q_1$ of $2, 4, 6, 8, 10, 12, 14$ is:", ["$4$", "$6$", "$8$", "$10$"], 0, "Median $= 8$; lower half $2, 4, 6 \\Rightarrow Q_1 = 4$."));
  q.push(mc("medium", "The upper quartile $Q_3$ of $2, 4, 6, 8, 10, 12, 14$ is:", ["$10$", "$12$", "$14$", "$8$"], 1, "Upper half $10, 12, 14 \\Rightarrow Q_3 = 12$."));
  q.push(ms("medium", "A data set has values $5, 7, 8, 10, 12, 15, 18$. Which are true?", ["Median $= 10$", "$Q_1 = 7$", "$Q_3 = 15$", "IQR $= 8$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are true about outliers?", ["They are unusually high or low values", "They affect the mean", "They strongly affect the median", "They can be identified using the IQR"], [0, 1, 3]));
  q.push(ms("medium", "For the data set $1, 3, 3, 4, 5, 7, 9, 10$, which are true?", ["Median $= 4.5$", "$Q_1 = 3$", "$Q_3 = 8$", "IQR $= 5$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are true about the mean?", ["It is the sum of values divided by the count", "It is affected by outliers", "It is always equal to the median", "It is a measure of centre"], [0, 1, 3]));
  q.push(ms("medium", "A box plot displays which statistics?", ["Minimum", "$Q_1$", "Median", "$Q_3$", "Maximum"], [0, 1, 2, 3, 4]));
  q.push(tf("medium", "The interquartile range is the difference between $Q_3$ and $Q_1$.", true));
  q.push(tf("medium", "The median is always greater than the mean.", false));
  q.push(tf("medium", "An outlier is a value that is far from the other values.", true));
  q.push(tf("medium", "$Q_1$ divides the data so that about 25% of values are below it.", true));
  q.push(tf("medium", "The range is a measure of central tendency.", false, "It is a measure of spread."));
  q.push(num("medium", "For the data set $5, 8, 12, 15, 18$, the median is ___.", 12, 0));
  q.push(num("medium", "The IQR of a data set with $Q_1 = 20$ and $Q_3 = 50$ is ___.", 30, 0));
  q.push(num("medium", "The mean of $3, 5, 7, 9, 11$ is ___.", 7, 0));
  q.push(num("medium", "The lower quartile of $1, 4, 6, 8, 10, 12$ is ___.", 4, 0));
  q.push(num("medium", "The range of $2, 5, 8, 11, 14$ is ___.", 12, 0));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "For $2, 3, 5, 7, 11, 13, 17, 19$ (Q_1 = 3.5, Q_3 = 14.5, IQR = 11), which value is an outlier by the 1.5×IQR rule?", ["$2$", "$19$", "$13$", "None"], 3, "Fences: $3.5 - 16.5 = -13$ and $14.5 + 16.5 = 31$; all values lie inside."));
  q.push(mc("hard", "The mean of $10, 12, 14, 16, x$ is $15$. What is $x$?", ["$18$", "$20$", "$23$", "$25$"], 2, "$52 + x = 75 \\Rightarrow x = 23$."));
  q.push(mc("hard", "A data set has median $20$, IQR $8$, minimum $10$, maximum $30$. Which is true?", ["There is a low outlier", "There is a high outlier", "There are no outliers", "Cannot be determined"], 2, "$Q_1 \\le 20 \\le Q_3$ with $Q_3 - Q_1 = 8$, so the lower fence $\\le 8 < 10$ and the upper fence $\\ge 32 > 30$ — no outliers."));
  q.push(mc("hard", "The mean of five numbers is $12$. If one number is removed, the mean becomes $10$. The removed number is:", ["$10$", "$15$", "$20$", "$25$"], 2, "$60 - 40 = 20$."));
  q.push(mc("hard", "A data set has $Q_1 = 15$, $Q_3 = 35$, and a value of $60$. By the 1.5×IQR rule, is $60$ an outlier?", ["Yes", "No", "Cannot be determined", "Only if the mean $> 40$"], 1, "IQR $= 20$; upper fence $= 35 + 30 = 65$; $60 < 65$, so it is not an outlier."));
  q.push(ms("hard", "For $4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15$, which are true?", ["Mean $= 9.5$", "Median $= 9.5$", "$Q_1 = 6.5$", "$Q_3 = 12.5$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which are true about the effect of outliers?", ["The mean is pulled toward the outlier", "The median is not affected much", "The mode is always affected", "The range is affected"], [0, 1, 3]));
  q.push(ms("hard", "A data set has 10 values. Which are true about the median?", ["It is the average of the 5th and 6th values", "It is the “5.5th” value", "It divides the data in half", "It is always an integer"], [0, 1, 2]));
  q.push(ms("hard", "Which statistics are resistant to outliers?", ["Median", "Mean", "Mode", "IQR"], [0, 2, 3]));
  q.push(ms("hard", "A box plot shows minimum $5$, $Q_1 = 12$, median $18$, $Q_3 = 25$, maximum $40$. Which are true?", ["IQR $= 13$", "Range $= 35$", "Upper fence $= 25 + 1.5 \\times 13 = 44.5$", "$40$ is not an outlier"], [0, 1, 2, 3]));
  q.push(tf("hard", "In a symmetric distribution, the mean and median are equal.", true));
  q.push(tf("hard", "The IQR is a measure of central tendency.", false, "It is a measure of spread."));
  q.push(tf("hard", "An outlier can be identified using the quartiles and IQR.", true));
  q.push(tf("hard", "In a right-skewed distribution, the mean is always less than the median.", false, "The mean is greater than the median (pulled right)."));
  q.push(tf("hard", "A box plot gives a sense of the shape of a distribution.", true));
  q.push(num("hard", "The mean of $8, 12, 15, 20, x$ is $16$. Then $x =$ ___.", 25, 0));
  q.push(num("hard", "For a data set with $Q_1 = 10$ and $Q_3 = 30$, the upper fence (1.5×IQR) is ___.", 60, 0));
  q.push(fill("hard", "A data set has 8 values. The median is the average of the ___ values.", ["4th and 5th", "4 and 5", "fourth and fifth"]));
  q.push(num("hard", "The range of $2, 5, 8, 11, 14, 17, 20$ is ___.", 18, 0));
  q.push(fill("hard", "A data set has mean $25$ and one outlier of $100$. The outlier pulls the mean ___ (one word).", ["up", "upward", "higher"]));

  return q;
}

// ── 6.3 Scatter Plots & Correlation ──────────────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen63() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "A scatter plot is used to show the relationship between:", ["Two categorical variables", "Two numerical variables", "One numerical and one categorical variable", "Three variables"], 1));
  q.push(mc("easy", "If points on a scatter plot go upward from left to right, the correlation is:", ["Positive", "Negative", "Zero", "Curved"], 0));
  q.push(mc("easy", "If points on a scatter plot go downward from left to right, the correlation is:", ["Positive", "Negative", "Zero", "Curved"], 1));
  q.push(mc("easy", "If points on a scatter plot have no clear pattern, the correlation is:", ["Positive", "Negative", "Zero / no correlation", "Strong"], 2));
  q.push(mc("easy", "A line that best represents the trend in a scatter plot is called:", ["A horizontal line", "A vertical line", "A line of best fit", "A curve"], 2));
  q.push(ms("easy", "Which describe a positive correlation?", ["As study time increases, test scores increase", "As temperature increases, ice cream sales increase", "As age increases, height increases (for children)", "As speed increases, travel time decreases"], [0, 1, 2]));
  q.push(ms("easy", "Which describe a negative correlation?", ["As speed increases, travel time decreases", "As age increases, number of toys decreases", "As hours of exercise increase, weight decreases", "As temperature increases, ice cream sales increase"], [0, 1, 2]));
  q.push(ms("easy", "Which are true about scatter plots?", ["They show relationships between two variables", "Each point represents one data pair", "They can show trends", "They always show causation"], [0, 1, 2]));
  q.push(ms("easy", "Which statements about the line of best fit are true?", ["It passes through all data points", "It is used to make predictions", "It summarizes the trend", "It minimizes the overall distance to the points"], [1, 2, 3]));
  q.push(ms("easy", "Which are true about correlation?", ["Correlation always means causation", "Correlation can be positive, negative, or zero", "Correlation is measured by a correlation coefficient", "Outliers can affect correlation"], [1, 2, 3]));
  q.push(tf("easy", "A scatter plot with points going up from left to right shows positive correlation.", true));
  q.push(tf("easy", "A scatter plot with points going down from left to right shows negative correlation.", true));
  q.push(tf("easy", "Correlation always means one variable causes the other.", false));
  q.push(tf("easy", "The line of best fit always passes through the origin.", false));
  q.push(tf("easy", "Outliers can affect the line of best fit.", true));
  q.push(fill("easy", "A scatter plot shows the relationship between ___ variables (a number).", ["two", "2"]));
  q.push(fill("easy", "Points going up from left to right indicate ___ correlation (one word).", ["positive"]));
  q.push(fill("easy", "Points going down from left to right indicate ___ correlation (one word).", ["negative"]));
  q.push(fill("easy", "A line that summarizes the trend in a scatter plot is called a ___.", ["line of best fit", "best fit line", "best-fit line", "trend line"]));
  q.push(fill("easy", "Using the line of best fit to predict outside the data range is called ___ (one word).", ["extrapolation"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "A scatter plot shows that as hours of sleep increase, test scores increase. This is a:", ["Positive correlation", "Negative correlation", "No correlation", "Perfect correlation"], 0));
  q.push(mc("medium", "A scatter plot shows no clear trend. The correlation coefficient is approximately:", ["$0.9$", "$0.0$", "$-0.9$", "$1.0$"], 1));
  q.push(mc("medium", "A correlation coefficient $r = 0.85$ indicates:", ["Weak positive correlation", "Strong positive correlation", "Weak negative correlation", "No correlation"], 1));
  q.push(mc("medium", "A correlation coefficient $r = -0.92$ indicates:", ["Weak negative correlation", "Strong negative correlation", "Strong positive correlation", "No correlation"], 1));
  q.push(mc("medium", "If the line of best fit is $y = 2x + 3$ and $x = 5$, the predicted $y$ is:", ["$10$", "$13$", "$7$", "$8$"], 1, "$2(5) + 3 = 13$."));
  q.push(ms("medium", "Which are true about the correlation coefficient $r$?", ["$r$ ranges from $-1$ to $+1$", "$r = 1$ means perfect positive correlation", "$r = -1$ means perfect negative correlation", "$r = 0$ means no (linear) correlation"], [0, 1, 2, 3]));
  q.push(ms("medium", "A scatter plot shows a strong positive correlation. Which are true?", ["Points are close to the line of best fit", "The correlation coefficient is near $+1$", "As one variable increases, the other increases", "The line of best fit has a positive slope"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are true about interpolation and extrapolation?", ["Interpolation is predicting within the data range", "Extrapolation is predicting outside the data range", "Extrapolation is more reliable", "Interpolation is more reliable"], [0, 1, 3]));
  q.push(ms("medium", "A scatter plot has an outlier far from the rest. Which are true?", ["The outlier can affect the line of best fit", "The outlier can affect the correlation coefficient", "The outlier should always be removed", "The outlier may indicate a special case"], [0, 1, 3]));
  q.push(ms("medium", "Which real-world situations could show a negative correlation?", ["Hours watching TV vs test scores", "Price of an item vs number sold", "Age of a car vs its resale value", "Temperature vs ice cream sales"], [0, 1, 2]));
  q.push(tf("medium", "A correlation coefficient of $0.5$ means the correlation is strong.", false, "It is moderate."));
  q.push(tf("medium", "A correlation coefficient of $-0.7$ indicates a stronger relationship than $+0.6$.", true, "$|-0.7| > |0.6|$."));
  q.push(tf("medium", "The line of best fit passes through the point $(\\bar{x}, \\bar{y})$ (the mean of x and y).", true));
  q.push(tf("medium", "Correlation implies causation.", false));
  q.push(tf("medium", "Outliers can distort the line of best fit.", true));
  q.push(fill("medium", "A correlation coefficient $r = -0.88$ indicates a ___ correlation (two words).", ["strong negative"]));
  q.push(fill("medium", "Predicting outside the data range is called ___ (one word).", ["extrapolation"]));
  q.push(num("medium", "The line of best fit $y = 3x - 2$ predicts $y$ when $x = 4$ as ___.", 10, 0));
  q.push(fill("medium", "If the correlation coefficient is $r = 0.15$, the correlation is ___ (one word).", ["weak"]));
  q.push(fill("medium", "In a scatter plot, each point represents one ___.", ["data pair", "ordered pair", "pair", "point"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "The line of best fit is $y = 2.5x + 10$. A new data point $(6, 25)$ is added. Its residual (actual − predicted) is:", ["$0$", "$5$", "$-5$", "$25$"], 0, "Predicted $= 2.5(6) + 10 = 25$; residual $= 25 - 25 = 0$."));
  q.push(mc("hard", "A scatter plot has points $(1,2), (2,4), (3,6), (4,8), (5,10)$. The correlation coefficient is:", ["$0$", "$0.5$", "$1$", "$-1$"], 2, "The points lie on a perfect increasing line."));
  q.push(mc("hard", "A single point lies far from the line of best fit (an outlier). In general, it tends to:", ["Weaken the correlation (reduce $|r|$)", "Always strengthen the correlation", "Have no effect on $r$", "Force $r$ to exactly $0$"], 0, "A point far off the trend increases scatter, lowering $|r|$."));
  q.push(mc("hard", "The line of best fit is $y = 0.8x + 5$. A data point is $(10, 14)$. The residual (actual − predicted) is:", ["$-1$", "$1$", "$0$", "$14$"], 1, "Predicted $= 0.8(10) + 5 = 13$; residual $= 14 - 13 = 1$."));
  q.push(mc("hard", "Two variables have a correlation coefficient of $0.92$. Which is true?", ["A strong positive linear relationship", "A strong negative linear relationship", "No relationship", "The variables are independent"], 0));
  q.push(ms("hard", "Which statements about correlation and causation are true?", ["Correlation does not imply causation", "A third (lurking) variable may explain the correlation", "Correlation can be spurious", "Causation always implies correlation"], [0, 1, 2, 3]));
  q.push(ms("hard", "A scatter plot has a strong positive correlation but one outlier far below the trend. Which are true?", ["The outlier reduces the correlation coefficient", "The outlier increases the correlation coefficient", "The outlier pulls the line of best fit down", "The outlier should be investigated"], [0, 2, 3]));
  q.push(ms("hard", "The line of best fit is $y = 1.2x - 4$. A data point is $(10, 9)$. Which are true?", ["Predicted value $= 8$", "Residual $= 1$", "Residual $= -1$", "The point is above the line"], [0, 1, 3], "Predicted $= 1.2(10) - 4 = 8$; residual $= 9 - 8 = 1$."));
  q.push(ms("hard", "Which are true about the correlation coefficient?", ["It measures the strength of a linear relationship", "It is affected by outliers", "A value of $-0.9$ is stronger than $0.5$", "A value of $0$ means no linear relationship"], [0, 1, 2, 3]));
  q.push(ms("hard", "A data set has points $(1,3), (2,5), (3,7), (4,9), (5,11)$ with line of best fit $y = 2x + 1$. Which are true?", ["The line fits perfectly", "All residuals are $0$", "Correlation coefficient $= 1$", "The slope is $2$"], [0, 1, 2, 3]));
  q.push(tf("hard", "A correlation coefficient of $0.9$ means the variables are strongly related.", true));
  q.push(tf("hard", "A residual is the difference between the actual and predicted value.", true));
  q.push(tf("hard", "Extrapolation is more reliable than interpolation.", false));
  q.push(tf("hard", "Outliers should always be removed from a data set.", false));
  q.push(tf("hard", "A negative correlation means that as one variable increases, the other decreases.", true));
  q.push(num("hard", "The residual (actual − predicted) for the point $(8, 20)$ on the line $y = 2.5x - 2$ is ___.", 2, 0, "Predicted $= 2.5(8) - 2 = 18$; residual $= 20 - 18 = 2$."));
  q.push(fill("hard", "A correlation coefficient $r = -0.95$ indicates a ___ correlation (two words).", ["strong negative"]));
  q.push(num("hard", "The line of best fit $y = 3x + 2$ predicts $y$ when $x = 7$ as ___.", 23, 0));
  q.push(fill("hard", "The difference between the actual and predicted value is called the ___ (one word).", ["residual"]));
  q.push(fill("hard", "A data point that lies far from the rest is called an ___ (one word).", ["outlier"]));

  return q;
}

// ── 6.4 The Mathematical Modelling Process ───────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen64() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "The first step in the mathematical modelling process is:", ["Solve the equation", "Identify and understand the problem", "Create a graph", "Check your answer"], 1));
  q.push(mc("easy", "A mathematical model is a representation of a real-world situation using:", ["Only words", "Only pictures", "Mathematics (equations, graphs, tables)", "Only numbers"], 2));
  q.push(mc("easy", "After solving a mathematical model, the next step is to:", ["Start over", "Interpret the result in the real-world context", "Ignore the answer", "Change the question"], 1));
  q.push(mc("easy", "When you check whether your model gives reasonable results, you are:", ["Solving", "Validating", "Simplifying", "Graphing"], 1));
  q.push(mc("easy", "If a model does not match real-world data, you should:", ["Ignore the real-world data", "Refine or revise the model", "Always trust the model", "Stop modelling"], 1));
  q.push(ms("easy", "Which are steps in the mathematical modelling process?", ["Identify the problem", "Formulate a mathematical representation", "Solve the mathematics", "Interpret and validate"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are reasons to simplify a real-world problem?", ["To make it easier to solve", "To ignore important factors", "To focus on the most important variables", "To make it more accurate"], [0, 2]));
  q.push(ms("easy", "Which are examples of mathematical models?", ["An equation $y = 2x + 3$", "A graph showing temperature over time", "A table of monthly expenses", "A written description of a situation"], [0, 1, 2]));
  q.push(ms("easy", "When validating a model, you should:", ["Compare model predictions with real data", "See if the results make sense", "Assume the model is always correct", "Check for errors in calculations"], [0, 1, 3]));
  q.push(ms("easy", "Which statements about mathematical models are true?", ["All models are exact representations of reality", "Models can be used to make predictions", "Models often need to be refined", "Models help us understand complex situations"], [1, 2, 3]));
  q.push(tf("easy", "The first step in modelling is to solve the equation.", false));
  q.push(tf("easy", "A mathematical model can be an equation, graph, or table.", true));
  q.push(tf("easy", "Validation means checking if the model works well.", true));
  q.push(tf("easy", "Once a model is made, it never needs to be changed.", false));
  q.push(tf("easy", "Simplification means making the problem more complex.", false));
  q.push(fill("easy", "A representation of a real-world situation using mathematics is called a mathematical ___ (one word).", ["model"]));
  q.push(fill("easy", "The step of comparing model results to real data is called ___ (one word).", ["validation", "validating"]));
  q.push(fill("easy", "After solving a model, you must ___ the result (one word).", ["interpret", "interpretation"]));
  q.push(fill("easy", "Changing a model to improve it is called ___.", ["refining", "refinement"]));
  q.push(fill("easy", "The first step in modelling is to ___ the problem (one word).", ["identify", "understand"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "A taxi ride is modelled by $C = 5 + 2d$, where $d$ is distance in km. If you travel 8 km, the cost is:", ["$\\textdollar 13$", "$\\textdollar 16$", "$\\textdollar 21$", "$\\textdollar 24$"], 2, "$5 + 2(8) = 21$."));
  q.push(mc("medium", "In the modelling process, “formulating” means:", ["Drawing a graph", "Writing equations or functions to represent the situation", "Finding the answer", "Checking the answer"], 1));
  q.push(mc("medium", "A model predicts a population of 5000, but the actual population is 5200. The model should be:", ["Accepted without change", "Refined to improve accuracy", "Discarded completely", "Used only for other problems"], 1));
  q.push(mc("medium", "A simplified model assumes all students walk to school at the same speed. This is an example of:", ["Validation", "A simplifying assumption", "Interpretation", "Refinement"], 1));
  q.push(mc("medium", "The equation $P = 100(1.05)^t$ models population growth. What does $100$ represent?", ["The growth rate", "The initial population", "The final population", "The time"], 1));
  q.push(ms("medium", "A plant's height is modelled by $h = 2t + 5$, where $t$ is weeks. Which are true?", ["Initial height is 5 cm", "Growth rate is 2 cm/week", "After 3 weeks, height is 11 cm", "After 4 weeks, height is 13 cm"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are true about the mathematical modelling process?", ["It is a cycle that can be repeated", "It starts with identifying the problem", "It ends with solving the equation", "It involves interpreting results"], [0, 1, 3]));
  q.push(ms("medium", "Which are reasons to simplify a model?", ["To make it easier to solve", "To remove unnecessary details", "To make it more realistic", "To focus on key factors"], [0, 1, 3]));
  q.push(ms("medium", "When validating a model, you should consider:", ["Does the answer make sense?", "Are the assumptions reasonable?", "Does the model fit the data?", "Is the model exactly perfect?"], [0, 1, 2]));
  q.push(ms("medium", "Profit is modelled by $P = 10n - 50$, where $n$ is items sold. Which are true?", ["Fixed cost is $\\textdollar 50$", "Profit per item is $\\textdollar 10$", "Break-even is 5 items", "Profit for 10 items is $\\textdollar 50$"], [0, 1, 2, 3]));
  q.push(tf("medium", "Simplifying a model always makes it less useful.", false));
  q.push(tf("medium", "Validation may reveal that a model needs further refinement.", true));
  q.push(tf("medium", "A model can be refined after validation.", true));
  q.push(tf("medium", "The modelling process is linear (one direction only).", false, "It is iterative/cyclic."));
  q.push(tf("medium", "Mathematical models are always perfect representations of reality.", false));
  q.push(num("medium", "The model $C = 15 + 0.5m$ describes a cost. The fixed cost is ___ dollars.", 15, 0));
  q.push(num("medium", "If a model predicts 200 but the actual value is 190, the error is ___.", 10, 0));
  q.push(fill("medium", "Changing a model to improve it is called ___.", ["refinement", "refining"]));
  q.push(fill("medium", "The step of writing an equation for a situation is called ___.", ["formulation", "formulating"]));
  q.push(fill("medium", "In a model, ___ are quantities represented by symbols (one word).", ["variables"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A company models profit as $P = 8n - 200$. If it sells 30 items, the profit is:", ["$\\textdollar 40$", "$\\textdollar 240$", "$\\textdollar 200$", "$\\textdollar 400$"], 0, "$8(30) - 200 = 40$."));
  q.push(mc("hard", "Temperature over a day is modelled by $T = 20 - 3(t - 6)^2$ (t = hours since midnight). The maximum predicted temperature is:", ["$17°C$", "$20°C$", "$23°C$", "$14°C$"], 1, "Maximum at $t = 6$, giving $T = 20$."));
  q.push(mc("hard", "Population growth is modelled by $P = 500(1.02)^t$. If the actual population after 5 years is 560, the model is:", ["Accurate to within 1", "Underestimating", "Overestimating", "Not applicable"], 1, "Model $\\approx 500(1.104) \\approx 552 < 560$, so it underestimates."));
  q.push(mc("hard", "A model for distance is $d = 60t - 4.9t^2$. This model:", ["Is linear", "Includes acceleration due to gravity", "Is quadratic", "Both includes gravity and is quadratic"], 3));
  q.push(mc("hard", "A simplified model assumes all cars travel at constant speed, though in reality they speed up and slow down. The simplified model is:", ["Useless", "Sometimes useful for rough estimates", "Always exact", "Better than the real situation"], 1));
  q.push(ms("hard", "Revenue is modelled by $R = 20n - 0.5n^2$ (n = items). Which are true?", ["It is a quadratic model", "Maximum revenue occurs at $n = 20$", "Revenue at $n = 10$ is 150", "Revenue at $n = 30$ is 150"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which are true about refining a model?", ["It can involve adding more variables", "It can involve changing assumptions", "It is done after validation", "It always means starting from scratch"], [0, 1, 2]));
  q.push(ms("hard", "A model has been validated with data. Which are true?", ["It can be used with confidence", "It may still need refinement", "It is now perfect", "It may not work for other situations"], [0, 1, 3]));
  q.push(ms("hard", "Which are true about assumptions in modelling?", ["They simplify the problem", "They can affect the accuracy", "They should always be perfectly realistic", "They are often necessary"], [0, 1, 3]));
  q.push(ms("hard", "The height of a ball is modelled by $h = -4.9t^2 + 20t + 2$. Which are true?", ["Initial height is 2 m", "Maximum height is at about $t = 2.04$ s", "Maximum height is about 22.4 m", "It is a quadratic model"], [0, 1, 2, 3]));
  q.push(tf("hard", "Mathematical modelling is a cyclic process.", true));
  q.push(tf("hard", "A simple model is always better than a complex model.", false, "It depends on the purpose."));
  q.push(tf("hard", "Assumptions in a model should be clearly stated.", true));
  q.push(tf("hard", "Validation is only done at the very end of the process.", false, "It can be done throughout."));
  q.push(tf("hard", "A model can be used to make predictions even if it is not perfect.", true));
  q.push(num("hard", "For the model $y = 2x^2 - 4x + 1$, the minimum value occurs at $x =$ ___.", 1, 0));
  q.push(num("hard", "If a model predicts 250 and the actual value is 240, the error is ___.", 10, 0));
  q.push(fill("hard", "The step of checking whether a model works is called ___ (one word).", ["validation", "validating"]));
  q.push(fill("hard", "A model that is too simple may have ___.", ["low accuracy", "poor accuracy", "inaccuracy", "low precision"]));
  q.push(fill("hard", "In modelling, assumptions are made to ___ the problem (one word).", ["simplify"]));

  return q;
}

// ── 7.1 Making Financial Decisions ───────────────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
// Money is written as \textdollar inside $...$ so the PromptText $-split renders it.
export function gen71() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "The amount of money earned from work is called:", ["Expense", "Income", "Budget", "Interest"], 1));
  q.push(mc("easy", "Money spent on goods and services is called:", ["Income", "Savings", "Expense", "Interest"], 2));
  q.push(mc("easy", "If you earn $\\textdollar 200$ and spend $\\textdollar 150$, your savings are:", ["$\\textdollar 50$", "$\\textdollar 350$", "$\\textdollar 200$", "$\\textdollar 150$"], 0));
  q.push(mc("easy", "Simple interest is calculated using:", ["$I = Prt$", "$I = P(1 + r)^t$", "$A = P(1 + rt)$", "$A = P(1 + r)^t$"], 0));
  q.push(mc("easy", "A discount of 10% on a $\\textdollar 50$ item gives a saving of:", ["$\\textdollar 5$", "$\\textdollar 10$", "$\\textdollar 45$", "$\\textdollar 50$"], 0, "$\\textdollar 50 \\times 0.10 = \\textdollar 5$."));
  q.push(ms("easy", "Which are sources of income?", ["Salary", "Allowance", "Rent collected from a tenant", "Money spent on groceries"], [0, 1, 2]));
  q.push(ms("easy", "Which are examples of expenses?", ["Rent", "Groceries", "Salary", "Utilities"], [0, 1, 3]));
  q.push(ms("easy", "If you earn $\\textdollar 300$ and save $\\textdollar 60$, which are true?", ["Expenses are $\\textdollar 240$", "Savings are 20% of income", "Expenses are 80% of income", "Savings are $\\textdollar 60$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which formulas are correct for simple interest?", ["$I = Prt$", "$A = P + I$", "$A = P(1 + rt)$", "$I = \\frac{Prt}{100}$ (rate in percent)"], [0, 1, 2, 3]));
  q.push(ms("easy", "A store offers 20% off. Which are true?", ["You pay 80% of the original price", "You save 20%", "Discount $= 0.20 \\times$ original price", "Sale price $= 0.80 \\times$ original price"], [0, 1, 2, 3]));
  q.push(tf("easy", "Income is money you spend.", false));
  q.push(tf("easy", "A budget helps you plan your spending.", true));
  q.push(tf("easy", "Simple interest is calculated on the original principal only.", true));
  q.push(tf("easy", "A discount reduces the price of an item.", true));
  q.push(tf("easy", "Saving money means spending more than you earn.", false));
  q.push(fill("easy", "The formula for simple interest is $I =$ ___ (three letters).", ["Prt", "prt", "PRT", "p r t"]));
  q.push(num("easy", "If you earn $\\textdollar 400$ and spend $\\textdollar 320$, your savings $=$ ___ dollars.", 80, 0));
  q.push(num("easy", "15% of $\\textdollar 200$ is ___ dollars.", 30, 0));
  q.push(fill("easy", "A budget helps you manage your ___ (one word).", ["money"]));
  q.push(fill("easy", "Take-home pay after deductions is called your ___ income (one word).", ["net"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "You deposit $\\textdollar 1000$ at 5% simple interest per year for 3 years. The interest earned is:", ["$\\textdollar 50$", "$\\textdollar 150$", "$\\textdollar 500$", "$\\textdollar 1500$"], 1, "$I = 1000 \\times 0.05 \\times 3 = 150$."));
  q.push(mc("medium", "You deposit $\\textdollar 500$ at 4% compound interest (annually) for 2 years. The final amount is:", ["$\\textdollar 540$", "$\\textdollar 540.80$", "$\\textdollar 520$", "$\\textdollar 560$"], 1, "$500(1.04)^2 = 540.80$."));
  q.push(mc("medium", "A $\\textdollar 120$ jacket is on sale for 25% off. The sale price is:", ["$\\textdollar 30$", "$\\textdollar 90$", "$\\textdollar 120$", "$\\textdollar 95$"], 1, "$120 \\times 0.75 = 90$."));
  q.push(mc("medium", "If 1 USD $=$ 1.35 CAD, how many CAD for 200 USD?", ["$\\textdollar 135$", "$\\textdollar 270$", "$\\textdollar 200$", "$\\textdollar 148.15$"], 1, "$200 \\times 1.35 = 270$."));
  q.push(mc("medium", "Monthly income $\\textdollar 2500$, expenses $\\textdollar 2100$. The percentage of income saved is:", ["16%", "84%", "20%", "10%"], 0, "Savings $400$; $400/2500 = 16\\%$."));
  q.push(ms("medium", "You deposit $\\textdollar 2000$ at 3% simple interest for 4 years. Which are true?", ["Interest is $\\textdollar 240$", "Total amount is $\\textdollar 2240$", "Interest $= 2000 \\times 0.03 \\times 4$", "The interest each year is $\\textdollar 60$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are true about compound vs simple interest?", ["Compound interest earns interest on interest", "Over time, simple interest totals less than compound at the same rate", "Compound interest grows faster", "Simple interest is calculated on the principal only"], [0, 1, 2, 3]));
  q.push(ms("medium", "A $\\textdollar 250$ item is discounted 20%, then an additional 10% off. Which are true?", ["First discount $= \\textdollar 50$", "Price after first discount $= \\textdollar 200$", "Second discount $= \\textdollar 20$", "Final price $= \\textdollar 180$"], [0, 1, 2, 3]));
  q.push(ms("medium", "If you earn $\\textdollar 3000$/month and save 15%, which are true?", ["Savings $= \\textdollar 450$", "Expenses $= \\textdollar 2550$", "Expenses are 85% of income", "Savings are 15% of income"], [0, 1, 2, 3]));
  q.push(ms("medium", "On $\\textdollar 1000$ for 2 years, a bank offers 5% simple vs 4.8% compound. Which are true?", ["Simple interest $= \\textdollar 100$", "Compound interest $\\approx \\textdollar 98.30$", "Simple interest is the better deal", "Compound interest is the better deal"], [0, 1, 2], "Simple $= 100$; compound $= 1000(1.048)^2 - 1000 \\approx 98.30$."));
  q.push(tf("medium", "Compound interest pays interest on previously earned interest.", true));
  q.push(tf("medium", "A discount of 20% means you pay 80% of the original price.", true));
  q.push(tf("medium", "Exchange rates tell you how much one currency is worth in another.", true));
  q.push(tf("medium", "A budget is only for people with low income.", false));
  q.push(tf("medium", "If you spend more than you earn, you have a budget surplus.", false, "That is a budget deficit."));
  q.push(num("medium", "$I = Prt$. If $P = \\textdollar 800$, $r = 6\\%$, $t = 2$ years, then $I =$ ___ dollars.", 96, 0));
  q.push(num("medium", "If you earn $\\textdollar 2500$ and save $\\textdollar 500$, the savings percentage is ___ (percent).", 20, 0));
  q.push(num("medium", "A $\\textdollar 300$ item with a 15% discount costs ___ dollars.", 255, 0));
  q.push(num("medium", "If 1 EUR $=$ 1.20 USD, then 250 EUR $=$ ___ USD.", 300, 0));
  q.push(num("medium", "$A = P(1+i)^n$. If $P = 1000$, $i = 0.05$, $n = 3$, then $A \\approx$ ___ dollars.", 1157.63, 0.5));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "You invest $\\textdollar 5000$ at 6% compound interest (annually). About how long to double? (use $1.06^n = 2$)", ["About 10 years", "About 12 years", "About 15 years", "About 20 years"], 1, "$n = \\log 2 / \\log 1.06 \\approx 11.9$."));
  q.push(mc("hard", "A loan of $\\textdollar 2000$ at 8% simple interest is repaid after 3 years. The total repayment is:", ["$\\textdollar 480$", "$\\textdollar 2480$", "$\\textdollar 2000$", "$\\textdollar 160$"], 1, "$I = 2000 \\times 0.08 \\times 3 = 480$; total $= 2480$."));
  q.push(mc("hard", "“Buy 2, get 1 free” on items costing $\\textdollar 15$ each. The discount percentage is:", ["33.3%", "25%", "50%", "20%"], 0, "Pay for 2 of every 3: $1/3 \\approx 33.3\\%$."));
  q.push(mc("hard", "Two job offers: A) $\\textdollar 45{,}000$/year, B) $\\textdollar 3800$/month. Which is better annually?", ["Offer A", "Offer B", "They are equal", "Cannot determine"], 1, "B $= 3800 \\times 12 = \\textdollar 45{,}600$, which is more than $\\textdollar 45{,}000$."));
  q.push(mc("hard", "You save $\\textdollar 200$/month. On the total saved after 1 year, simple interest at 3%/year is:", ["$\\textdollar 6$", "$\\textdollar 72$", "$\\textdollar 60$", "$\\textdollar 120$"], 1, "Total saved $= 2400$; $2400 \\times 0.03 = 72$."));
  q.push(ms("hard", "You invest $\\textdollar 1000$ at 5% compound interest for 5 years. Which are true?", ["$A = 1000(1.05)^5$", "$A \\approx \\textdollar 1276.28$", "Interest $\\approx \\textdollar 276.28$", "Interest exceeds the simple interest of $\\textdollar 250$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A car depreciates 15% per year from $\\textdollar 20{,}000$. After 2 years, which are true?", ["Value $= 20000(0.85)^2$", "Value $\\approx \\textdollar 14{,}450$", "Loss $\\approx \\textdollar 5{,}550$", "Depreciation is compound (a percent of the current value)"], [0, 1, 2, 3]));
  q.push(ms("hard", "On $\\textdollar 1000$ for 3 years: A) 5% simple vs B) 4.5% compound. Which are true?", ["Simple interest $= \\textdollar 150$", "Compound interest $\\approx \\textdollar 141.16$", "Option A earns more", "Option B earns more"], [0, 1, 2]));
  q.push(ms("hard", "A store offers 30% off, then an additional 20% off. Which are true?", ["The total discount is 50%", "The total discount is 44%", "Final price $= 0.7 \\times 0.8 = 0.56$ of the original", "Final price is 56% of the original"], [1, 2, 3]));
  q.push(ms("hard", "You earn $\\textdollar 60{,}000$/year and pay 25% tax. Which are true?", ["Net income is $\\textdollar 45{,}000$", "Net income is $\\textdollar 15{,}000$", "Net income $= \\textdollar 60{,}000 \\times 0.75$", "Tax paid is $\\textdollar 15{,}000$"], [0, 2, 3]));
  q.push(tf("hard", "Compound interest grows faster than simple interest for the same rate over time.", true));
  q.push(tf("hard", "A “Buy 2, get 1 free” offer is equivalent to a 33.3% discount.", true));
  q.push(tf("hard", "Saving 10% of your income means you spend 90% of it.", true));
  q.push(tf("hard", "Exchange rates are constant and never change.", false));
  q.push(tf("hard", "A budget surplus means you have more income than expenses.", true));
  q.push(num("hard", "Invest $\\textdollar 2000$ at 4% compound interest for 3 years: $A \\approx$ ___ dollars.", 2249.73, 0.5));
  q.push(num("hard", "A $\\textdollar 500$ item is 15% off, then 10% off the sale price. The final price is ___ dollars.", 382.50, 0.5));
  q.push(num("hard", "If 1 USD $=$ 0.85 EUR, then 340 EUR $=$ ___ USD.", 400, 0));
  q.push(num("hard", "Simple interest on $\\textdollar 1500$ at 6% for 4 years is ___ dollars.", 360, 0));
  q.push(num("hard", "To double your money at 8% simple interest takes ___ years.", 12.5, 0.1));

  return q;
}

// ── 7.2 Appreciation & Depreciation ──────────────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen72() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "Appreciation means:", ["A decrease in value", "An increase in value", "No change in value", "A fixed value"], 1));
  q.push(mc("easy", "Depreciation means:", ["An increase in value", "A decrease in value", "No change in value", "A fixed value"], 1));
  q.push(mc("easy", "A car bought for $\\textdollar 20{,}000$ depreciates by 10% per year. After 1 year, its value is:", ["$\\textdollar 18{,}000$", "$\\textdollar 22{,}000$", "$\\textdollar 2{,}000$", "$\\textdollar 19{,}000$"], 0, "$20000 \\times 0.90 = 18000$."));
  q.push(mc("easy", "A house bought for $\\textdollar 150{,}000$ appreciates by 5% per year. After 1 year, its value is:", ["$\\textdollar 157{,}500$", "$\\textdollar 150{,}000$", "$\\textdollar 142{,}500$", "$\\textdollar 155{,}000$"], 0, "$150000 \\times 1.05 = 157500$."));
  q.push(mc("easy", "If a $\\textdollar 500$ item depreciates by 20%, its new value is:", ["$\\textdollar 100$", "$\\textdollar 400$", "$\\textdollar 600$", "$\\textdollar 500$"], 1, "$500 \\times 0.80 = 400$."));
  q.push(ms("easy", "Which are examples of appreciation?", ["A house increasing in value", "A car losing value", "A collectible becoming more valuable", "A phone losing value"], [0, 2]));
  q.push(ms("easy", "Which are examples of depreciation?", ["A new car losing value", "A computer becoming outdated", "A house increasing in value", "An antique becoming more valuable"], [0, 1]));
  q.push(ms("easy", "A $\\textdollar 1000$ item appreciates by 8%. Which are true?", ["New value $= \\textdollar 1080$", "Increase $= \\textdollar 80$", "New value $= 1000 \\times 1.08$", "Growth factor $= 1.08$"], [0, 1, 2, 3]));
  q.push(ms("easy", "A $\\textdollar 1200$ item depreciates by 15%. Which are true?", ["New value $= \\textdollar 1020$", "Decrease $= \\textdollar 180$", "New value $= 1200 \\times 0.85$", "Decay factor $= 0.85$"], [0, 1, 2, 3]));
  q.push(ms("easy", "If a value increases by 10%, the growth factor is:", ["$1.10$", "$0.10$", "$1.1$", "$0.90$"], [0, 2]));
  q.push(tf("easy", "Appreciation means the value goes up.", true));
  q.push(tf("easy", "Depreciation means the value goes down.", true));
  q.push(tf("easy", "If a car depreciates by 10%, its value becomes 90% of the original.", true));
  q.push(tf("easy", "If a house appreciates by 5%, its value becomes 105% of the original.", true));
  q.push(tf("easy", "Appreciation and depreciation always happen at the same rate.", false));
  q.push(num("easy", "A $\\textdollar 200$ item depreciates by 25%. New value $=$ ___ dollars.", 150, 0));
  q.push(num("easy", "A $\\textdollar 300$ item appreciates by 10%. New value $=$ ___ dollars.", 330, 0));
  q.push(num("easy", "The growth factor for 15% appreciation is ___.", 1.15, 0));
  q.push(num("easy", "The decay factor for 12% depreciation is ___.", 0.88, 0));
  q.push(num("easy", "If a value doubles, it has appreciated by ___ percent.", 100, 0));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "A car worth $\\textdollar 15{,}000$ depreciates at 8% per year (compound). Its value after 2 years is:", ["$\\textdollar 12{,}696$", "$\\textdollar 12{,}600$", "$\\textdollar 13{,}800$", "$\\textdollar 14{,}700$"], 0, "$15000 \\times 0.92^2 = 12696$."));
  q.push(mc("medium", "A house worth $\\textdollar 200{,}000$ appreciates at 6% per year. Its value after 3 years is:", ["$\\textdollar 236{,}000$", "$\\textdollar 238{,}203.20$", "$\\textdollar 212{,}000$", "$\\textdollar 224{,}000$"], 1, "$200000 \\times 1.06^3 = 238203.20$."));
  q.push(mc("medium", "A laptop bought for $\\textdollar 1200$ depreciates at 15% per year. After 2 years, its value is about:", ["$\\textdollar 867$", "$\\textdollar 1020$", "$\\textdollar 720$", "$\\textdollar 900$"], 0, "$1200 \\times 0.85^2 = 867$."));
  q.push(mc("medium", "A painting appreciates from $\\textdollar 5000$ to $\\textdollar 6000$ in one year. The appreciation rate is:", ["10%", "20%", "5%", "25%"], 1, "$\\frac{6000-5000}{5000} = 20\\%$."));
  q.push(mc("medium", "A car depreciates from $\\textdollar 25{,}000$ to $\\textdollar 20{,}000$ in one year. The depreciation rate is:", ["10%", "20%", "25%", "5%"], 1, "$\\frac{25000-20000}{25000} = 20\\%$."));
  q.push(ms("medium", "A $\\textdollar 10{,}000$ investment appreciates at 5% compound annually for 3 years. Which are true?", ["Value $= 10000(1.05)^3$", "Value $\\approx \\textdollar 11{,}576.25$", "Increase $\\approx \\textdollar 1{,}576.25$", "Growth factor each year $= 1.05$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A $\\textdollar 5000$ car depreciates at 12% per year. Which are true?", ["After 1 year: $\\textdollar 4400$", "After 2 years: $5000 \\times 0.88^2$", "After 2 years: $\\textdollar 3872$", "Depreciation is compound"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which are true about appreciation and depreciation?", ["Appreciation factor $> 1$", "Depreciation factor $< 1$", "Both can be simple or compound", "Compound gives faster growth/decay"], [0, 1, 2, 3]));
  q.push(ms("medium", "An item appreciates from $\\textdollar 80$ to $\\textdollar 100$. Which are true?", ["Increase $= \\textdollar 20$", "Percentage increase $= 25\\%$", "Growth factor $= 1.25$", "Percentage increase $= 20\\%$"], [0, 1, 2]));
  q.push(ms("medium", "An item depreciates from $\\textdollar 150$ to $\\textdollar 120$. Which are true?", ["Decrease $= \\textdollar 30$", "Percentage decrease $= 20\\%$", "Decay factor $= 0.80$", "Percentage decrease $= 25\\%$"], [0, 1, 2]));
  q.push(tf("medium", "Compound depreciation means the item loses the same dollar amount each year.", false, "Compound loses a fixed percentage, so the dollar loss shrinks each year."));
  q.push(tf("medium", "Simple appreciation adds the same amount each year.", true));
  q.push(tf("medium", "A growth factor of 1.12 means 12% appreciation.", true));
  q.push(tf("medium", "A decay factor of 0.90 means 10% depreciation.", true));
  q.push(tf("medium", "Appreciation always makes an item more valuable than depreciation.", false, "It depends on the rates and time."));
  q.push(num("medium", "A $\\textdollar 2000$ item appreciates at 4% per year for 3 years. Value $=$ ___ dollars.", 2249.73, 0.5));
  q.push(num("medium", "A $\\textdollar 3000$ car depreciates at 10% per year for 2 years. Value $=$ ___ dollars.", 2430, 0));
  q.push(num("medium", "If a value increases from $\\textdollar 400$ to $\\textdollar 500$, the percentage increase is ___ percent.", 25, 0));
  q.push(num("medium", "If a value decreases from $\\textdollar 250$ to $\\textdollar 200$, the percentage decrease is ___ percent.", 20, 0));
  q.push(num("medium", "$A = P(1+r)^t$. If $P = 500$, $r = 0.06$, $t = 4$, then $A \\approx$ ___ dollars.", 631.24, 0.5));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "A car worth $\\textdollar 30{,}000$ depreciates at 18% per year. After how many years is it worth less than $\\textdollar 10{,}000$?", ["3 years", "5 years", "6 years", "7 years"], 2, "$30000 \\times 0.82^5 \\approx 11122$; $\\times 0.82^6 \\approx 9119 < 10000$."));
  q.push(mc("hard", "A house appreciates at 7% per year. If it is worth $\\textdollar 250{,}000$ now, its value 2 years ago was about:", ["$\\textdollar 218{,}360$", "$\\textdollar 233{,}645$", "$\\textdollar 200{,}000$", "$\\textdollar 286{,}225$"], 0, "$250000 \\div 1.07^2 \\approx 218360$."));
  q.push(mc("hard", "An antique appreciates at 12% per year. If it is worth $\\textdollar 800$ now, its value 3 years ago was about:", ["$\\textdollar 569$", "$\\textdollar 714$", "$\\textdollar 600$", "$\\textdollar 500$"], 0, "$800 \\div 1.12^3 \\approx 569$."));
  q.push(mc("hard", "A new car depreciates 20% in the first year and 15% each year after. After 2 years, a $\\textdollar 25{,}000$ car is worth:", ["$\\textdollar 17{,}000$", "$\\textdollar 16{,}250$", "$\\textdollar 18{,}000$", "$\\textdollar 15{,}000$"], 0, "$25000 \\times 0.80 = 20000$; $20000 \\times 0.85 = 17000$."));
  q.push(mc("hard", "An investment grows from $\\textdollar 5000$ to $\\textdollar 8000$ in 4 years. The average annual compound growth rate is about:", ["10%", "12.5%", "15%", "20%"], 1, "$(1+r)^4 = 1.6 \\Rightarrow 1+r \\approx 1.1247 \\Rightarrow r \\approx 12.5\\%$."));
  q.push(ms("hard", "You buy a house for $\\textdollar 180{,}000$. It appreciates 8% per year for 5 years. Which are true?", ["Value $= 180000(1.08)^5$", "Value $\\approx \\textdollar 264{,}480$", "Increase $\\approx \\textdollar 84{,}480$", "Growth factor each year $= 1.08$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A machine worth $\\textdollar 20{,}000$ depreciates at 25% per year. Which are true?", ["After 1 year: $\\textdollar 15{,}000$", "After 2 years: $\\textdollar 11{,}250$", "After 3 years: $\\textdollar 8{,}437.50$", "Depreciation is compound"], [0, 1, 2, 3]));
  q.push(ms("hard", "A collectible appreciates from $\\textdollar 200$ to $\\textdollar 350$ in 3 years. Which are true?", ["Total appreciation $= 75\\%$", "Average annual appreciation $\\approx 20.5\\%$", "Growth factor over 3 years $= 1.75$", "$200(1+r)^3 = 350$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A car depreciates at 15% per year (compound). Which are true?", ["After 2 years, value $=$ original $\\times 0.85^2$", "Depreciation is compound", "The car loses more value in the first year than the second", "The dollar loss is smaller each year"], [0, 1, 2, 3]));
  q.push(ms("hard", "An investment appreciates at 6% compound interest. Which are true?", ["It doubles in about 12 years (Rule of 72)", "$72 \\div 6 = 12$ years to double", "After 12 years, value $\\approx 2\\times$ original", "Appreciation is compound"], [0, 1, 2, 3]));
  q.push(tf("hard", "The Rule of 72 estimates the doubling time for compound growth.", true));
  q.push(tf("hard", "Depreciation always makes an item completely worthless eventually.", false, "Compound depreciation approaches zero but never reaches it."));
  q.push(tf("hard", "Appreciation and depreciation can both be modelled by exponential functions.", true));
  q.push(tf("hard", "Simple depreciation means the item loses a fixed percentage each year.", false, "Simple loses a fixed dollar amount; percentage loss is compound."));
  q.push(tf("hard", "If an item appreciates 10% per year, it doubles in about 7.2 years (Rule of 72).", true));
  q.push(num("hard", "A $\\textdollar 12{,}000$ car depreciates at 10% per year for 3 years. Value $=$ ___ dollars.", 8748, 0));
  q.push(num("hard", "A $\\textdollar 100{,}000$ house appreciates at 5% per year for 4 years. Value $=$ ___ dollars.", 121550.63, 1));
  q.push(num("hard", "If an item depreciates from $\\textdollar 800$ to $\\textdollar 500$, the percentage decrease is ___ percent.", 37.5, 0));
  q.push(num("hard", "To double your money at 8% compound interest takes about ___ years (Rule of 72).", 9, 0));
  q.push(num("hard", "The growth factor for 7% appreciation is ___.", 1.07, 0));

  return q;
}

// ── 7.3 Interest & Borrowing ─────────────────────────────────
// User-authored 60-question set (2026-06-16), answer key verified & corrected.
export function gen73() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "The original amount of money borrowed or invested is called the:", ["Interest", "Principal", "Rate", "Time"], 1));
  q.push(mc("easy", "Simple interest is calculated using the formula:", ["$I = Prt$", "$A = P(1+r)^t$", "$I = P(1+rt)$", "$A = Pe^{rt}$"], 0));
  q.push(mc("easy", "If you borrow $\\textdollar 500$ at 6% simple interest for 2 years, the interest is:", ["$\\textdollar 30$", "$\\textdollar 60$", "$\\textdollar 600$", "$\\textdollar 120$"], 1, "$500 \\times 0.06 \\times 2 = 60$."));
  q.push(mc("easy", "The total amount to repay a $\\textdollar 1000$ loan at 5% simple interest for 3 years is:", ["$\\textdollar 150$", "$\\textdollar 1150$", "$\\textdollar 1050$", "$\\textdollar 1300$"], 1, "$I = 150$; total $= 1150$."));
  q.push(mc("easy", "If you borrow $\\textdollar 200$ at 4% simple interest for 1 year, the total repayment is:", ["$\\textdollar 208$", "$\\textdollar 200$", "$\\textdollar 204$", "$\\textdollar 240$"], 0, "$I = 8$; total $= 208$."));
  q.push(ms("easy", "Which are components of simple interest?", ["Principal $(P)$", "Rate $(r)$", "Time $(t)$", "Compounding frequency"], [0, 1, 2]));
  q.push(ms("easy", "A loan of $\\textdollar 800$ at 5% simple interest for 2 years. Which are true?", ["Interest $= \\textdollar 80$", "Interest $= 800 \\times 0.05 \\times 2$", "Total repayment $= \\textdollar 880$", "Total repayment $= \\textdollar 800$"], [0, 1, 2]));
  q.push(ms("easy", "Which are examples of borrowing?", ["Taking a mortgage", "Using a credit card", "Depositing money in a savings account", "Getting a student loan"], [0, 1, 3]));
  q.push(ms("easy", "If the interest rate increases (time positive), the total interest:", ["Increases", "Decreases", "Stays the same", "Grows even more over a longer time"], [0, 3]));
  q.push(ms("easy", "A loan of $\\textdollar 600$ at 4% simple interest for 3 years. Which are true?", ["Interest $= 600 \\times 0.04 \\times 3 = 72$", "Total $= \\textdollar 672$", "Interest $= \\textdollar 72$", "The rate is 4% per year"], [0, 1, 2, 3]));
  q.push(tf("easy", "The principal is the amount of money borrowed.", true));
  q.push(tf("easy", "Simple interest is calculated on the principal only.", true));
  q.push(tf("easy", "A higher interest rate means you pay less interest.", false));
  q.push(tf("easy", "The total amount to repay is the principal plus the interest.", true));
  q.push(tf("easy", "Time in the simple interest formula is measured in years.", true));
  q.push(fill("easy", "The formula for simple interest is $I =$ ___ (three letters).", ["Prt", "prt", "PRT", "p r t"]));
  q.push(num("easy", "If $P = \\textdollar 300$, $r = 5\\%$, $t = 2$ years, then $I =$ ___ dollars.", 30, 0));
  q.push(num("easy", "If you borrow $\\textdollar 400$ at 6% for 1 year, the total repayment is ___ dollars.", 424, 0));
  q.push(fill("easy", "The amount of money borrowed is called the ___ (one word).", ["principal"]));
  q.push(fill("easy", "The cost of borrowing money is called ___ (one word).", ["interest"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "You borrow $\\textdollar 2000$ at 7% simple interest for 4 years. The total interest is:", ["$\\textdollar 140$", "$\\textdollar 280$", "$\\textdollar 560$", "$\\textdollar 700$"], 2, "$2000 \\times 0.07 \\times 4 = 560$."));
  q.push(mc("medium", "You invest $\\textdollar 1500$ at 5% compound interest (annually) for 2 years. The final amount is:", ["$\\textdollar 1575$", "$\\textdollar 1653.75$", "$\\textdollar 1600$", "$\\textdollar 1725$"], 1, "$1500(1.05)^2 = 1653.75$."));
  q.push(mc("medium", "A $\\textdollar 3000$ loan at 8% simple interest is repaid over 5 years in equal monthly installments (total $\\div$ 60). Each monthly payment is:", ["$\\textdollar 50$", "$\\textdollar 70$", "$\\textdollar 80$", "$\\textdollar 90$"], 1, "$I = 1200$; total $= 4200$; $4200 \\div 60 = 70$."));
  q.push(mc("medium", "If you borrow $\\textdollar 5000$ at 6% compound interest for 2 years, the total interest is about:", ["$\\textdollar 600$", "$\\textdollar 618$", "$\\textdollar 636$", "$\\textdollar 660$"], 1, "$A = 5000(1.06)^2 = 5618$; interest $= 618$."));
  q.push(mc("medium", "A credit card charges 18% per year. On a $\\textdollar 400$ balance paid off in 6 months, the simple interest ($t = 0.5$) is:", ["$\\textdollar 18$", "$\\textdollar 36$", "$\\textdollar 72$", "$\\textdollar 144$"], 1, "$400 \\times 0.18 \\times 0.5 = 36$."));
  q.push(ms("medium", "A loan of $\\textdollar 2500$ at 6% simple interest for 3 years. Which are true?", ["Interest $= \\textdollar 450$", "Total $= \\textdollar 2950$", "Interest $= 2500 \\times 0.06 \\times 3$", "The principal is $\\textdollar 2500$"], [0, 1, 2, 3]));
  q.push(ms("medium", "Which statements about compound interest are true?", ["Interest is earned on interest", "It grows faster than simple interest", "The formula is $A = P(1+i)^n$", "It always gives less interest than simple interest"], [0, 1, 2]));
  q.push(ms("medium", "On $\\textdollar 2000$ for 3 years: A) 5% simple vs B) 4.5% compound. Which are true?", ["Simple interest $= \\textdollar 300$", "Compound interest $\\approx \\textdollar 282.33$", "Loan A has the higher interest", "Loan B has the higher interest"], [0, 1, 2], "Compound $= 2000(1.045)^3 - 2000 \\approx 282.33$."));
  q.push(ms("medium", "If you borrow $\\textdollar 4000$ at 9% simple interest for 2.5 years, which are true?", ["Interest $= 4000 \\times 0.09 \\times 2.5 = 900$", "Total $= \\textdollar 4900$", "Monthly payment over 30 months $\\approx \\textdollar 163.33$", "Interest $= \\textdollar 900$"], [0, 1, 2, 3]));
  q.push(ms("medium", "A mortgage of $\\textdollar 100{,}000$ at 4% simple interest for 25 years. Which are true?", ["Interest $= \\textdollar 100{,}000$", "Total $= \\textdollar 200{,}000$", "Monthly payment $\\approx \\textdollar 666.67$", "Interest $= 100000 \\times 0.04 \\times 25$"], [0, 1, 2, 3]));
  q.push(tf("medium", "Compound interest grows faster than simple interest over time at the same rate.", true));
  q.push(tf("medium", "The total amount to repay a loan is always greater than the principal (when interest is charged).", true));
  q.push(tf("medium", "A credit card interest rate is usually higher than a mortgage rate.", true));
  q.push(tf("medium", "Simple interest takes into account interest on interest.", false, "That is compound interest."));
  q.push(tf("medium", "Borrowing money usually involves paying interest.", true));
  q.push(num("medium", "$I = Prt$. If $P = \\textdollar 1200$, $r = 6\\%$, $t = 3$ years, then $I =$ ___ dollars.", 216, 0));
  q.push(num("medium", "$A = P(1+i)^n$. If $P = 1000$, $i = 0.05$, $n = 3$, then $A \\approx$ ___ dollars.", 1157.63, 0.5));
  q.push(num("medium", "A loan of $\\textdollar 2500$ at 7% simple interest for 4 years has total interest ___ dollars.", 700, 0));
  q.push(num("medium", "If you borrow $\\textdollar 800$ at 10% simple interest for 2.5 years, the total repayment is ___ dollars.", 1000, 0));
  q.push(fill("medium", "To find the monthly payment, divide the total amount by the ___.", ["number of months", "months", "the number of months"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "You borrow $\\textdollar 15{,}000$ at 6.5% simple interest for 5 years. The total repayment is:", ["$\\textdollar 19{,}875$", "$\\textdollar 19{,}000$", "$\\textdollar 20{,}000$", "$\\textdollar 21{,}000$"], 0, "$I = 15000 \\times 0.065 \\times 5 = 4875$; total $= 19875$."));
  q.push(mc("hard", "You invest $\\textdollar 8000$ at 4.5% compound interest. About how long to grow to $\\textdollar 10{,}000$? (use $1.045^n = 1.25$)", ["About 4 years", "About 5 years", "About 6 years", "About 7 years"], 1, "$n = \\log 1.25 / \\log 1.045 \\approx 5.1$."));
  q.push(mc("hard", "Two $\\textdollar 5000$ loan offers: A) 8% simple for 3 years; B) 7.5% compound for 3 years. Which is cheaper?", ["Offer A", "Offer B", "They are equal", "Cannot determine"], 0, "A: $I = 1200$; B: $5000(1.075)^3 - 5000 \\approx 1211$. A is cheaper."));
  q.push(mc("hard", "A credit card has 22% APR compounded monthly. On a $\\textdollar 1200$ balance with no payments for 6 months, the balance is about:", ["$\\textdollar 1338$", "$\\textdollar 1300$", "$\\textdollar 1464$", "$\\textdollar 1200$"], 0, "$1200(1 + 0.22/12)^6 \\approx 1338$."));
  q.push(mc("hard", "A $\\textdollar 20{,}000$ student loan at 3.5% simple interest is deferred for 4 years. The balance when payments start is:", ["$\\textdollar 22{,}800$", "$\\textdollar 23{,}800$", "$\\textdollar 21{,}400$", "$\\textdollar 22{,}000$"], 0, "$I = 20000 \\times 0.035 \\times 4 = 2800$; balance $= 22800$."));
  q.push(ms("hard", "You borrow $\\textdollar 10{,}000$ at 5% compound interest for 5 years. Which are true?", ["$A = 10000(1.05)^5$", "$A \\approx \\textdollar 12{,}762.82$", "Interest $\\approx \\textdollar 2{,}762.82$", "Interest exceeds the simple interest of $\\textdollar 2{,}500$"], [0, 1, 2, 3]));
  q.push(ms("hard", "A mortgage of $\\textdollar 150{,}000$ at 4.5% simple interest for 30 years. Which are true?", ["Interest $= 150000 \\times 0.045 \\times 30 = 202500$", "Total $= \\textdollar 352{,}500$", "Monthly payment $\\approx \\textdollar 979.17$", "Interest $= \\textdollar 202{,}500$"], [0, 1, 2, 3]));
  q.push(ms("hard", "Two $\\textdollar 6000$ loans: A) 7% simple for 4 years; B) 6.5% compound for 4 years. Which are true?", ["Simple interest $= \\textdollar 1680$", "Compound interest $\\approx \\textdollar 1718.79$", "Loan A is cheaper", "Loan B is cheaper"], [0, 1, 2]));
  q.push(ms("hard", "A credit card has 20% APR compounded monthly on a $\\textdollar 500$ balance held for 1 year. Which are true?", ["Monthly rate $= 20\\% \\div 12 \\approx 1.6667\\%$", "$A = 500(1 + 0.20/12)^{12}$", "Balance $\\approx \\textdollar 609.70$", "Interest $\\approx \\textdollar 109.70$"], [0, 1, 2, 3]));
  q.push(ms("hard", "You borrow $\\textdollar 8000$ at 6% simple interest, repaid in 4 equal annual installments including interest. Which are true?", ["Total payments $= \\textdollar 9920$", "Total $= 8000 + 8000 \\times 0.06 \\times 4$", "Total interest $= \\textdollar 1920$", "Total $= 8000 + 1920$"], [0, 1, 2, 3]));
  q.push(tf("hard", "Compound interest grows faster than simple interest for the same rate over time.", true));
  q.push(tf("hard", "The Rule of 72 estimates how long it takes a debt to double under compound interest.", true));
  q.push(tf("hard", "Credit card interest is usually simple interest.", false, "It is usually compounded monthly."));
  q.push(tf("hard", "A lower interest rate means lower total interest on a loan.", true));
  q.push(tf("hard", "Borrowing money always requires collateral.", false, "Many loans (e.g. credit cards) are unsecured."));
  q.push(num("hard", "If you borrow $\\textdollar 2500$ at 8% simple interest for 3.5 years, the interest is ___ dollars.", 700, 0));
  q.push(num("hard", "Compound interest on $\\textdollar 4000$ at 5% for 2 years is ___ dollars.", 410, 0));
  q.push(num("hard", "To pay off a $\\textdollar 3000$ loan at 6% simple interest in 3 years with monthly payments, each payment is about ___ dollars.", 98.33, 0.05));
  q.push(num("hard", "A $\\textdollar 5000$ loan at 4% compound interest grows to $\\textdollar 6083.26$. The number of years is ___.", 5, 0));
  q.push(num("hard", "The total amount on a $\\textdollar 2000$ loan at 7% simple interest for 6 years is ___ dollars.", 2840, 0));

  return q;
}

// ── 7.4 Budgets ──────────────────────────────────────────────
// User-authored 60-question set (2026-06-16), answer key verified (clean).
export function gen74() {
  const q = [];

  // ── LEVEL 1 — EASY ──────────────────────────────────────────
  q.push(mc("easy", "A budget is a plan for:", ["Spending and saving money", "Only saving money", "Only spending money", "Investing money only"], 0));
  q.push(mc("easy", "Expenses that stay the same each month are called:", ["Variable expenses", "Fixed expenses", "Discretionary expenses", "Savings"], 1));
  q.push(mc("easy", "Rent is an example of a:", ["Fixed expense", "Variable expense", "Discretionary expense", "Form of savings"], 0));
  q.push(mc("easy", "If your income is $\\textdollar 1000$ and your expenses are $\\textdollar 800$, you have a:", ["Deficit", "Surplus", "Budget", "Loan"], 1));
  q.push(mc("easy", "The amount of money left after paying expenses is called:", ["Income", "Debt", "Savings", "Budget"], 2));
  q.push(ms("easy", "Which are examples of fixed expenses?", ["Rent", "Groceries", "Car insurance", "Eating out"], [0, 2]));
  q.push(ms("easy", "Which are examples of variable expenses?", ["Electricity bill", "Mortgage payment", "Groceries", "Gasoline"], [0, 2, 3]));
  q.push(ms("easy", "A budget helps you to:", ["Track spending", "Save money", "Avoid debt", "Spend all your money"], [0, 1, 2]));
  q.push(ms("easy", "If you earn $\\textdollar 1500$ and spend $\\textdollar 1350$, which are true?", ["Surplus $= \\textdollar 150$", "Surplus $= 10\\%$ of income", "Expenses $= 90\\%$ of income", "Savings $= \\textdollar 150$"], [0, 1, 2, 3]));
  q.push(ms("easy", "Which are true about a budget?", ["It should include all sources of income", "It should include all expenses", "It should have a goal for savings", "It never needs to be adjusted"], [0, 1, 2]));
  q.push(tf("easy", "A budget helps you control your spending.", true));
  q.push(tf("easy", "Variable expenses change from month to month.", true));
  q.push(tf("easy", "A surplus means you are spending more than you earn.", false));
  q.push(tf("easy", "Savings should be part of every budget.", true));
  q.push(tf("easy", "Fixed expenses are the same every month.", true));
  q.push(fill("easy", "A plan for how to spend your money is called a ___ (one word).", ["budget"]));
  q.push(fill("easy", "Expenses that stay the same each month are ___ (one word).", ["fixed"]));
  q.push(fill("easy", "Expenses that change each month are ___ (one word).", ["variable"]));
  q.push(fill("easy", "If income is greater than expenses, you have a ___ (one word).", ["surplus"]));
  q.push(fill("easy", "The money you set aside for future needs is called ___ (one word).", ["savings"]));

  // ── LEVEL 2 — MEDIUM ────────────────────────────────────────
  q.push(mc("medium", "Monthly income $\\textdollar 2200$; fixed expenses $\\textdollar 1200$; variable expenses average $\\textdollar 700$. Monthly savings are:", ["$\\textdollar 300$", "$\\textdollar 500$", "$\\textdollar 700$", "$\\textdollar 200$"], 0, "$2200 - 1200 - 700 = 300$."));
  q.push(mc("medium", "If you save $\\textdollar 300$ out of a $\\textdollar 2000$ income, your savings rate is:", ["10%", "15%", "20%", "25%"], 1, "$300 \\div 2000 = 15\\%$."));
  q.push(mc("medium", "An emergency fund should ideally cover how many months of expenses?", ["1 month", "3–6 months", "12 months", "24 months"], 1));
  q.push(mc("medium", "You budget 30% housing, 15% food, 10% transportation, 20% savings. What percentage is left for other expenses?", ["25%", "15%", "20%", "10%"], 0, "$100 - (30+15+10+20) = 25\\%$."));
  q.push(mc("medium", "If your monthly income is $\\textdollar 2500$ and you want to save 20%, you should save:", ["$\\textdollar 500$", "$\\textdollar 250$", "$\\textdollar 1000$", "$\\textdollar 1250$"], 0, "$2500 \\times 0.20 = 500$."));
  q.push(ms("medium", "Earn $\\textdollar 1800$/month. Fixed: rent $\\textdollar 600$, insurance $\\textdollar 150$. Variable: groceries $\\textdollar 300$, entertainment $\\textdollar 150$, utilities $\\textdollar 100$, transportation $\\textdollar 100$. Which are true?", ["Total fixed $= \\textdollar 750$", "Total variable $= \\textdollar 650$", "Savings $= \\textdollar 400$", "Savings $\\approx 22.2\\%$ of income"], [0, 1, 2, 3], "$1800 - 750 - 650 = 400$; $400/1800 \\approx 22.2\\%$."));
  q.push(ms("medium", "Which are recommended budget categories?", ["Housing", "Food", "Savings", "Entertainment"], [0, 1, 2, 3]));
  q.push(ms("medium", "If you have a budget surplus, you could:", ["Increase savings", "Pay off debt", "Invest the money", "Spend more on entertainment"], [0, 1, 2, 3]));
  q.push(ms("medium", "A budget deficit means:", ["Expenses exceed income", "Income exceeds expenses", "You need to reduce spending or increase income", "You have savings"], [0, 2]));
  q.push(ms("medium", "Which are true about tracking expenses?", ["It helps identify wasteful spending", "It should be done weekly or monthly", "It is only for people in debt", "It helps you stick to your budget"], [0, 1, 3]));
  q.push(tf("medium", "Discretionary expenses are optional.", true));
  q.push(tf("medium", "Fixed expenses can never be changed.", false, "They can sometimes change — e.g. moving to cheaper rent."));
  q.push(tf("medium", "A budget should be reviewed regularly.", true));
  q.push(tf("medium", "Savings should be treated like the first expense in a budget (“pay yourself first”).", true));
  q.push(tf("medium", "A budget surplus means you have a problem.", false, "A surplus is a good thing."));
  q.push(num("medium", "Income $\\textdollar 3000$, fixed $\\textdollar 1800$, variable $\\textdollar 700$. Savings $=$ ___ dollars.", 500, 0));
  q.push(num("medium", "If savings $= \\textdollar 400$ on an income of $\\textdollar 2000$, the savings rate is ___ percent.", 20, 0));
  q.push(fill("medium", "An expense that is optional is called ___ (one word).", ["discretionary"]));
  q.push(fill("medium", "An emergency fund is for unexpected ___.", ["expenses", "expense"]));
  q.push(fill("medium", "A budget with expenses greater than income has a ___ (one word).", ["deficit"]));

  // ── LEVEL 3 — HARD ──────────────────────────────────────────
  q.push(mc("hard", "Monthly income $\\textdollar 4200$: 35% housing, 15% food, 10% transportation, 20% savings, the rest to other expenses. How much goes to other expenses?", ["$\\textdollar 840$", "$\\textdollar 630$", "$\\textdollar 420$", "$\\textdollar 1050$"], 0, "Other $= 100 - 80 = 20\\%$; $4200 \\times 0.20 = 840$."));
  q.push(mc("hard", "Earn $\\textdollar 2800$/month; fixed $\\textdollar 1400$; variable $\\textdollar 800$; save 20% of income. How much discretionary spending is left?", ["$\\textdollar 40$", "$\\textdollar 200$", "$\\textdollar 140$", "$\\textdollar 280$"], 0, "Savings $= 560$; $2800 - 1400 - 800 - 560 = 40$."));
  q.push(mc("hard", "A budget shows a deficit of $\\textdollar 150$/month. If variable expenses (currently $\\textdollar 800$) are cut by 10%, the new result is:", ["Deficit of $\\textdollar 70$", "Surplus of $\\textdollar 70$", "Deficit of $\\textdollar 80$", "Surplus of $\\textdollar 80$"], 0, "Cut $= 10\\% \\times 800 = 80$; $150 - 80 = 70$ deficit."));
  q.push(mc("hard", "You have $\\textdollar 2000$ in an emergency fund and monthly expenses of $\\textdollar 850$. How many full months can you cover with no income?", ["1 month", "2 months", "3 months", "4 months"], 1, "$2000 \\div 850 \\approx 2.35 \\Rightarrow 2$ full months."));
  q.push(mc("hard", "Income $\\textdollar 5000$: 30% housing, 15% food, 10% transportation, 10% insurance, 15% savings, 5% utilities, the rest entertainment. How much is entertainment?", ["$\\textdollar 250$", "$\\textdollar 500$", "$\\textdollar 750$", "$\\textdollar 1000$"], 2, "Entertainment $= 100 - 85 = 15\\%$; $5000 \\times 0.15 = 750$."));
  q.push(ms("hard", "A family earns $\\textdollar 6500$/month: housing 28%, food 14%, transportation 12%, insurance 8%, savings 18%, utilities 7%, entertainment 5%, the rest other. Which are true?", ["Housing $= \\textdollar 1820$", "Savings $= \\textdollar 1170$", "Other expenses $= 8\\% = \\textdollar 520$", "Entertainment $= \\textdollar 325$"], [0, 1, 2, 3]));
  q.push(ms("hard", "If you have a budget surplus, you could:", ["Increase your savings rate", "Invest in a retirement account", "Reduce your debt", "Donate to charity"], [0, 1, 2, 3]));
  q.push(ms("hard", "Which are true about creating a budget?", ["Track your income for 1–2 months first", "Categorize your expenses", "Set realistic spending limits", "Ignore occasional expenses"], [0, 1, 2]));
  q.push(ms("hard", "A budget deficit can be fixed by:", ["Increasing income (e.g. overtime)", "Reducing variable expenses", "Reducing fixed expenses", "Cutting discretionary spending"], [0, 1, 2, 3]));
  q.push(ms("hard", "Income $\\textdollar 3400$. Fixed: rent $\\textdollar 1200$, insurance $\\textdollar 300$, phone $\\textdollar 80$. Variable: groceries $\\textdollar 500$, utilities $\\textdollar 180$, transportation $\\textdollar 250$, entertainment $\\textdollar 200$. Savings goal 15% of income. Which are true?", ["Total fixed $= \\textdollar 1580$", "Total variable $= \\textdollar 1130$", "Savings target $= \\textdollar 510$", "After savings and all expenses, surplus $= \\textdollar 180$"], [0, 1, 2, 3], "$3400 - 1580 - 1130 - 510 = 180$."));
  q.push(tf("hard", "Fixed expenses are easier to change than variable expenses.", false, "Variable expenses are usually easier to adjust."));
  q.push(tf("hard", "A budget is only useful if you have a lot of money.", false));
  q.push(tf("hard", "Discretionary spending includes things like dining out and movies.", true));
  q.push(tf("hard", "Savings should be treated as an expense in your budget.", true));
  q.push(tf("hard", "A budget deficit means you are on track financially.", false));
  q.push(num("hard", "Income $\\textdollar 4800$, fixed $\\textdollar 2200$, variable $\\textdollar 1400$, savings goal 20%. Discretionary spending $=$ ___ dollars.", 240, 0));
  q.push(num("hard", "If your monthly expenses are $\\textdollar 1100$ and your emergency fund has $\\textdollar 3300$, you can cover ___ months.", 3, 0));
  q.push(fill("hard", "A budget that balances exactly has income equal to its ___.", ["expenses", "expense"]));
  q.push(num("hard", "The percent of income spent on housing if rent is $\\textdollar 950$ on a $\\textdollar 3800$ income is ___ percent.", 25, 0));
  q.push(fill("hard", "A budget with income $\\textdollar 2500$ and expenses $\\textdollar 2700$ has a ___ of $\\textdollar 200$ (one word).", ["deficit"]));

  return q;
}

const POOLS = [
  { pos: 0, title: "1.1 Number Sets & Their Subsets", gen: gen11 },
  { pos: 1, title: "1.2 Density, Infinity & Limit", gen: gen12 },
  { pos: 2, title: "1.3 Powers & Scientific Notation", gen: gen13 },
  { pos: 3, title: "1.4 Exponent Laws", gen: gen14 },
  { pos: 4, title: "1.5 Integers in Context", gen: gen15 },
  { pos: 5, title: "1.6 Fractions & Unit Fractions", gen: gen16 },
  { pos: 6, title: "1.7 Operations with Positive & Negative Fractions", gen: gen17 },
  { pos: 7, title: "1.8 Ratios, Rates, Percentages & Proportions", gen: gen18 },
  { pos: 8, title: "2.1 From Words to Algebraic Expressions", gen: gen21 },
  { pos: 9, title: "2.2 Equivalent Expressions", gen: gen22 },
  { pos: 10, title: "2.3 Simplifying Expressions", gen: gen23 },
  { pos: 11, title: "2.4 Creating & Solving Equations", gen: gen24 },
  { pos: 12, title: "3.1 Coding Algebraic Concepts", gen: gen31 },
  { pos: 13, title: "3.2 Building Code from Steps", gen: gen32 },
  { pos: 14, title: "3.3 Reading, Predicting & Altering Code", gen: gen33 },
  { pos: 15, title: "4.1 Linear vs Non-Linear Relations", gen: gen41 },
  { pos: 16, title: "4.2 Representing Linear Relations", gen: gen42 },
  { pos: 17, title: "4.3 Comparing Lines", gen: gen43 },
  { pos: 18, title: "4.4 Graphing Special Lines", gen: gen44 },
  { pos: 19, title: "4.5 Transformations of Lines", gen: gen45 },
  { pos: 20, title: "4.6 Finding the Equation of a Line", gen: gen46 },
  { pos: 21, title: "4.7 General Form of a Line", gen: gen47 },
  { pos: 22, title: "4.8 General Form vs Slope-Intercept Form", gen: gen48 },
  { pos: 23, title: "4.9 Parallel and Perpendicular Lines", gen: gen49 },
  { pos: 24, title: "5.1 Geometry & Measurement Through History", gen: gen51 },
  { pos: 25, title: "5.2 Designs with Circle & Triangle Properties", gen: gen52 },
  { pos: 26, title: "5.3 Units & Unit Conversion", gen: gen53 },
  { pos: 27, title: "5.4 The Pythagorean Theorem", gen: gen54 },
  { pos: 28, title: "5.5 Changing Dimensions: Perimeter", gen: gen55 },
  { pos: 29, title: "5.6 Changing Dimensions: Area", gen: gen56 },
  { pos: 30, title: "5.7 Volume", gen: gen57 },
  { pos: 31, title: "5.8 Surface Area", gen: gen58 },
  { pos: 32, title: "6.1 Big Data & Its Implications", gen: gen61 },
  { pos: 33, title: "6.2 One-Variable Data & Statistics", gen: gen62 },
  { pos: 34, title: "6.3 Scatter Plots & Correlation", gen: gen63 },
  { pos: 35, title: "6.4 The Mathematical Modelling Process", gen: gen64 },
  { pos: 36, title: "7.1 Making Financial Decisions", gen: gen71 },
  { pos: 37, title: "7.2 Appreciation & Depreciation", gen: gen72 },
  { pos: 38, title: "7.3 Interest & Borrowing", gen: gen73 },
  { pos: 39, title: "7.4 Budgets", gen: gen74 },
];

async function run() {
  const { data: course } = await db.from("courses").select("id").eq("code", "MTH1W").single();
  if (!course) { console.error("MTH1W course not found — run seed-mth1w.mjs first."); process.exit(1); }
  const { data: lessons } = await db.from("lessons").select("id, position").eq("course_id", course.id);
  const byPos = Object.fromEntries((lessons ?? []).map((l) => [l.position, l.id]));

  await db.from("bank_questions").delete().eq("course_id", course.id);

  let total = 0;
  for (const t of POOLS) {
    const items = t.gen();
    const rows = items.map((q) => ({
      course_id: course.id, lesson_id: byPos[t.pos] ?? null, topic: t.title,
      difficulty: q.difficulty, kind: q.kind, prompt: q.prompt,
      choices: q.choices ?? null, answer: q.answer ?? null, tolerance: q.tolerance ?? null,
      points: q.points ?? 1, feedback: q.feedback ?? null,
    }));
    // insert in batches of 200
    for (let i = 0; i < rows.length; i += 200) {
      const { error } = await db.from("bank_questions").insert(rows.slice(i, i + 200));
      if (error) throw error;
    }
    total += rows.length;
    console.log(`  ${t.title}: ${rows.length} questions`);
  }
  console.log(`\nBank seeded: ${total} questions for MTH1W.`);
}
// Only run the full re-seed when this file is executed directly, so other
// scripts (e.g. replace-bank-1_1.mjs) can import gen11 without wiping the bank.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((e) => { console.error("FAILED:", e.message ?? e); process.exit(1); });
}
