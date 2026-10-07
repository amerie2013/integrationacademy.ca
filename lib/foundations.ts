// Question generators + shared types for the Foundations games (basic arithmetic
// fluency). Every generator is pure and computes its answer from the operands, so
// the answer key can never disagree with the question.

export type Keys = { neg?: boolean; dec?: boolean; rem?: boolean };

export type Q = {
  prompt: string; // the arithmetic itself, e.g. "48 + 27"
  sub?: string; // short real-world caption under the prompt
  answer: string; // canonical answer ("-4", "3.65", "12R3")
  key: string; // identity, used to re-queue missed questions
  explain?: string; // one-line help shown after a miss
  keys?: Keys; // which extra keys the number pad shows
};

export type Level = { name: string; blurb: string; gen: () => Q };

export const rint = (lo: number, hi: number) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
export const pick = <T,>(a: readonly T[]): T => a[Math.floor(Math.random() * a.length)];
export const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const MINUS = "−";
/** Format an integer with a typographic minus. */
export const fmt = (n: number) => (n < 0 ? `${MINUS}${-n}` : String(n));
/** Same, but wraps negatives in brackets — for the second operand: 3 − (−4). */
export const fmtP = (n: number) => (n < 0 ? `(${MINUS}${-n})` : String(n));

/** Normalise what the student typed and compare it to the canonical answer. */
export function isCorrect(input: string, q: Q): boolean {
  const raw = input.trim().replace(/−/g, "-").replace(/\s+/g, "");
  if (!raw) return false;
  if (q.keys?.rem) return raw.toUpperCase() === q.answer.toUpperCase();
  if (!/^-?\d*\.?\d*$/.test(raw) || !/\d/.test(raw)) return false;
  return Math.abs(Number(raw) - Number(q.answer)) < 1e-9;
}

// ───────────────────────────── Cart Rush (addition) ─────────────────────────────
const ITEMS = ["Hoodie", "Sneakers", "Headphones", "Phone case", "Controller", "Cap", "Backpack", "Jersey", "Speaker", "Game pass", "Charger", "Sunglasses"];
const twoItems = () => shuffle(ITEMS).slice(0, 3);

function addQ(a: number, b: number, explain: string): Q {
  const [i1, i2] = twoItems();
  return { prompt: `${a} + ${b}`, sub: `${i1} $${a} + ${i2} $${b}`, answer: String(a + b), key: `${a}+${b}`, explain: `${a} + ${b} = ${a + b}. ${explain}` };
}
const carry = "Add the ones first, carry the 1, then the tens.";

export const CART_LEVELS: Level[] = [
  { name: "Within 20", blurb: "Single-digit sums that cross 10", gen: () => { let a, b; do { a = rint(3, 9); b = rint(3, 9); } while (a + b <= 10); return addQ(a, b, "Make a 10 first: split one number to fill the gap."); } },
  { name: "Carry the 1", blurb: "Two-digit + one-digit with a carry", gen: () => { const b = rint(3, 9); let a; do { a = rint(11, 89); } while ((a % 10) + b < 10); return addQ(a, b, carry); } },
  { name: "Two-digit sums", blurb: "Two-digit + two-digit", gen: () => { const a = rint(11, 89); let b; do { b = rint(11, 89); } while (Math.random() < 0.75 && (a % 10) + (b % 10) < 10); return addQ(a, b, carry); } },
  { name: "Three-digit sums", blurb: "Hundreds with carrying", gen: () => { const a = rint(101, 899); let b; do { b = rint(101, 899); } while ((a % 10) + (b % 10) < 10 && Math.random() < 0.8); return addQ(a, b, carry); } },
  {
    name: "Full cart", blurb: "Add three items",
    gen: () => {
      const a = rint(20, 189), b = rint(20, 189), c = rint(20, 189);
      const [i1, i2, i3] = twoItems();
      return { prompt: `${a} + ${b} + ${c}`, sub: `${i1} $${a} + ${i2} $${b} + ${i3} $${c}`, answer: String(a + b + c), key: `${a}+${b}+${c}`, explain: `${a} + ${b} = ${a + b}, then + ${c} = ${a + b + c}. Add two first, then the third.` };
    },
  },
];

// ───────────────────────────── Change Up (subtraction) ─────────────────────────────
function money(cents: number) {
  return Number((cents / 100).toFixed(2)).toString();
}
const showMoney = (c: number) => (c % 100 === 0 ? String(c / 100) : (c / 100).toFixed(2));
function changeQ(paidCents: number, totalCents: number, dec: boolean, explain: string): Q {
  const ans = paidCents - totalCents;
  const p = showMoney(paidCents), t = showMoney(totalCents);
  return {
    prompt: `${p} ${MINUS} ${t}`, sub: `Customer pays $${p}, total is $${t}. What's the change?`,
    answer: money(ans), key: `${paidCents}-${totalCents}`, keys: dec ? { dec: true } : undefined,
    explain: `${p} ${MINUS} ${t} = ${showMoney(ans)}. ${explain}`,
  };
}
const countUp = "Count up from the total to the amount paid.";

export const CHANGE_LEVELS: Level[] = [
  { name: "Within 20", blurb: "Pay with a $20 bill", gen: () => changeQ(2000, rint(11, 19) * 100, false, countUp) },
  {
    name: "Borrow a ten", blurb: "Two-digit whole dollars",
    gen: () => { const paid = pick([50, 60, 70, 80, 90, 100]); let t; do { t = rint(11, paid - 3); } while (t % 10 === 0 || paid % 10 >= t % 10); return changeQ(paid * 100, t * 100, false, "Borrow from the tens, or count up to the next ten."); },
  },
  {
    name: "Across zeros", blurb: "Big bills like 300 − 168",
    gen: () => { const paid = pick([200, 300, 400, 500, 1000]); let t; do { t = rint(101, paid - 7); } while (t % 10 === 0); return changeQ(paid * 100, t * 100, false, "Subtract 1 from the total's last digit group, or count up: to the next 10, then 100, then the bill."); },
  },
  {
    name: "Cents", blurb: "Cash register change",
    gen: () => { const paid = pick([5, 10, 20]); const t = rint(Math.floor(paid * 100 * 0.3 / 5), Math.floor((paid * 100 - 5) / 5)) * 5; return changeQ(paid * 100, t, true, countUp); },
  },
  {
    name: "Any amount", blurb: "Any cents, big bills",
    gen: () => { const paid = pick([20, 50, 100]); const t = rint(Math.floor(paid * 100 * 0.2), paid * 100 - 1); return changeQ(paid * 100, t, true, "Subtract the cents first, borrowing a dollar if you need to."); },
  },
];

// ───────────────────────────── Sign Flip (integers) ─────────────────────────────
function sign(): 1 | -1 { return Math.random() < 0.5 ? 1 : -1; }
function expr(a: number, op: "+" | "−" | "×" | "÷", b: number, ans: number, explain: string): Q {
  const prompt = `${fmt(a)} ${op} ${fmtP(b)}`;
  return { prompt, answer: String(ans), key: prompt, keys: { neg: true }, explain: `${prompt} = ${fmt(ans)}. ${explain}` };
}

export const SIGN_LEVELS: Level[] = [
  {
    name: "Mixed signs", blurb: "Add a positive and a negative",
    gen: () => { const n = -rint(1, 9); const p = rint(1, 9); const nFirst = Math.random() < 0.5; return nFirst ? expr(n, "+", p, n + p, "Different signs: subtract the sizes, keep the sign of the bigger one.") : expr(p, "+", n, p + n, "Different signs: subtract the sizes, keep the sign of the bigger one."); },
  },
  {
    name: "Dip below zero", blurb: "Subtract a bigger number",
    gen: () => { const b = rint(2, 14); const a = rint(1, b - 1); return expr(a, "−", b, a - b, "You're taking away more than you have — you land below zero."); },
  },
  {
    name: "Subtract a negative", blurb: "Minus a negative is a plus",
    gen: () => {
      const b = rint(1, 9);
      if (Math.random() < 0.5) { const a = rint(-9, 9); return expr(a, "−", -b, a + b, "Subtracting a negative flips to adding: a − (−b) = a + b."); }
      const a = -rint(1, 9); return expr(a, "−", b, a - b, "Start at the negative and move further down.");
    },
  },
  {
    name: "Any two integers", blurb: "Add or subtract, up to ±20",
    gen: () => {
      const a = sign() * rint(1, 20), b = sign() * rint(1, 20);
      return Math.random() < 0.5 ? expr(a, "+", b, a + b, "Same sign: add the sizes. Different signs: subtract them.") : expr(a, "−", b, a - b, "Rewrite a − b as a + (the opposite of b).");
    },
  },
  {
    name: "Times & divide", blurb: "Sign rules for × and ÷",
    gen: () => {
      const a = rint(2, 9), b = rint(2, 9);
      let x = sign() * a, y = sign() * b;
      if (x > 0 && y > 0) x = -x;
      const why = "Same signs give a positive; different signs give a negative.";
      if (Math.random() < 0.5) return expr(x, "×", y, x * y, why);
      return expr(x * y, "÷", y, x, why);
    },
  },
];

// ───────────────────────────── Split the Bill (division) ─────────────────────────────
function divQ(n: number, d: number, q: number, r: number, explain: string): Q {
  const hasR = r > 0;
  return {
    prompt: `${n} ÷ ${d}`,
    sub: hasR ? `Bill $${n} between ${d} friends — type it like 12 R 3` : `Bill $${n} between ${d} friends — each pays?`,
    answer: hasR ? `${q}R${r}` : String(q),
    key: `${n}/${d}`, keys: hasR ? { rem: true } : undefined,
    explain: `${n} ÷ ${d} = ${hasR ? `${q} R ${r}` : q}. ${explain}`,
  };
}

export const DIVIDE_LEVELS: Level[] = [
  { name: "Division facts", blurb: "Up to 12 × 12", gen: () => { const d = rint(2, 12), q = rint(2, 12); return divQ(d * q, d, q, 0, `Think: ${d} × ${q} = ${d * q}.`); } },
  { name: "Two-digit ÷ one", blurb: "Exact, no remainder", gen: () => { const d = rint(2, 9); const q = rint(10, Math.floor(99 / d)); return divQ(d * q, d, q, 0, "Split the tens, then the ones."); } },
  { name: "Three-digit ÷ one", blurb: "Hundreds, still exact", gen: () => { const d = rint(2, 9); const q = rint(Math.max(20, Math.ceil(100 / d)), Math.floor(999 / d)); return divQ(d * q, d, q, 0, "Work left to right: hundreds, tens, ones."); } },
  { name: "Two-digit divisors", blurb: "Like 156 ÷ 12", gen: () => { const d = rint(11, 25); const q = rint(6, 20); return divQ(d * q, d, q, 0, `Think: ${d} × ${q} = ${d * q}. Estimate with tens first.`); } },
  { name: "Remainders", blurb: "Leftovers: 12 R 3", gen: () => { const d = rint(3, 9); const q = rint(8, 30); const r = rint(1, d - 1); return divQ(d * q + r, d, q, r, `${d} × ${q} = ${d * q}, and ${r} is left over.`); } },
];

// ───────────────────────────── Fact Heat (multiplication) ─────────────────────────────
/** Tables unlocked at each level (cumulative). */
export const FACT_TABLES: number[][] = [
  [1, 2, 5, 10],
  [1, 2, 3, 4, 5, 10],
  [1, 2, 3, 4, 5, 6, 7, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
];
export const FACT_LEVEL_NAMES = [
  { name: "Easy tables", blurb: "1, 2, 5 and 10" },
  { name: "Add 3 and 4", blurb: "Tables 1–5 and 10" },
  { name: "Add 6 and 7", blurb: "The tricky middle" },
  { name: "Add 8 and 9", blurb: "Up to 10 × 12" },
  { name: "All 12 tables", blurb: "Every fact to 12 × 12" },
];
export const factKey = (a: number, b: number) => `${Math.min(a, b)}x${Math.max(a, b)}`;
export function factQ(a: number, b: number): Q {
  return { prompt: `${a} × ${b}`, answer: String(a * b), key: factKey(a, b), explain: `${a} × ${b} = ${a * b}.` };
}
