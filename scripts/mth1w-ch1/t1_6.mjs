// MTH1W 1.6 — Powers: Zero & Negative Exponents (rebuilt from the first half of the old 1.3, much deeper).
import { html, ex, pr, qa, watchOut, table, rng, bankKit, fillBank, packWorksheet, fracKit, sg } from "./lib.mjs";

export const CODE = "1.6";
export const TITLE = "Powers: Zero & Negative Exponents";
export const FULL_TITLE = `${CODE} ${TITLE}`;

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>🔢 Powers: Zero &amp; Negative Exponents</h1>
  <p><strong>Overview.</strong> A <strong>power</strong> is a short way to write repeated multiplication: \(2^5=2\times2\times2\times2\times2=32\). The <strong>base</strong> is the number being multiplied and the <strong>exponent</strong> says how many times. In this lesson you will evaluate powers with positive, zero and negative exponents, handle negative bases carefully, work with fraction bases, and see that a negative exponent is simply a <strong>reciprocal</strong> in disguise.</p>

  <h2>📌 Powers as repeated multiplication</h2>
  <p>\(a^n\) means \(n\) copies of \(a\) multiplied together. \(a^2\) is "\(a\) squared" and \(a^3\) is "\(a\) cubed". Memorize the perfect squares and the first powers of \(2\) and \(10\) — they appear constantly.</p>
  ${table(["n", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], [["n²", "1", "4", "9", "16", "25", "36", "49", "64", "81", "100"], ["2ⁿ", "2", "4", "8", "16", "32", "64", "128", "256", "512", "1024"], ["10ⁿ", "10", "100", "1 000", "10 000", "100 000", "10⁶", "10⁷", "10⁸", "10⁹", "10¹⁰"]])}

  <h2>📌 Negative bases: watch the brackets</h2>
  <p>Brackets decide what the exponent applies to. \((-2)^4=(-2)(-2)(-2)(-2)=16\), but \(-2^4=-(2^4)=-16\), because the exponent touches only the \(2\). With a bracketed negative base, an <strong>even</strong> exponent gives a positive answer and an <strong>odd</strong> exponent gives a negative one.</p>

  <h2>📌 Zero and negative exponents</h2>
  <p>Look at the pattern: each time the exponent drops by \(1\), the value is <strong>divided by the base</strong>.</p>
  ${table(["Power", "2⁴", "2³", "2²", "2¹", "2⁰", "2⁻¹", "2⁻²", "2⁻³"], [["Value", "16", "8", "4", "2", "1", "1/2", "1/4", "1/8"]])}
  <p>Keeping the pattern going gives two rules, for any base \(a\ne0\):</p>
  <ul>
    <li>\(a^0=1\) (and \(0^0\) is not defined).</li>
    <li>\(a^{-n}=\dfrac{1}{a^n}\) — a negative exponent means "take the <strong>reciprocal</strong>" (see lesson 1.5). It does <em>not</em> make the answer negative.</li>
  </ul>
  <p>For a fraction base, flipping the fraction does the work: \(\left(\dfrac23\right)^{-2}=\left(\dfrac32\right)^{2}=\dfrac94\). Slide the base \(a\) in the graph below to see how \(y=a^x\) grows to the right and shrinks toward \(0\) on the left but never reaches it.</p>

  <h2>📌 Order of operations with powers</h2>
  <p>Exponents come right after brackets: <strong>B</strong>rackets, <strong>E</strong>xponents, then \(\times\div\), then \(+-\). Evaluate each power first, then do the rest.</p>

  ${watchOut([
    String.raw`<strong>A negative exponent is not a negative number.</strong> \(2^{-3}=\dfrac18\), which is positive. The sign of the exponent tells you to take the reciprocal.`,
    String.raw`<strong>\(a^0=1\), not \(0\).</strong> But watch the brackets: \((-7)^0=1\) while \(-7^0=-(7^0)=-1\).`,
    String.raw`<strong>Exponents are not multiplication.</strong> \(2^3=2\times2\times2=8\), not \(2\times3=6\).`,
  ])}

  <h2>🔵 Examples</h2>
  ${ex(
    "Example 1: Evaluating powers",
    String.raw`Evaluate \(2^5\) and \(5^3\).`,
    [String.raw`\(2^5=2\times2\times2\times2\times2\). Multiply two at a time: \(4,\ 8,\ 16,\ 32\).`, String.raw`\(5^3=5\times5\times5=25\times5=125\).`],
    String.raw`\(2^5=32\) and \(5^3=125\)`,
  )}
  ${ex(
    "Example 2: Brackets and negative bases",
    String.raw`Evaluate \((-3)^4\), \(-3^4\) and \((-2)^3\).`,
    [String.raw`\((-3)^4=(-3)(-3)(-3)(-3)\): four negatives (even), so positive: \(81\).`, String.raw`\(-3^4=-(3^4)=-81\): the exponent applies to the \(3\) only.`, String.raw`\((-2)^3\): three negatives (odd), so negative: \(-8\).`],
    String.raw`\((-3)^4=81\), \(-3^4=-81\) and \((-2)^3=-8\)`,
  )}
  ${ex(
    "Example 3: The zero exponent",
    String.raw`Evaluate \(7^0\), \((-7)^0\), \(-7^0\) and \(\left(\dfrac34\right)^0\).`,
    [String.raw`Any non-zero base to the power \(0\) is \(1\): \(7^0=1\) and \((-7)^0=1\).`, String.raw`Without brackets the exponent applies to the \(7\) only: \(-7^0=-(7^0)=-1\).`, String.raw`\(\left(\dfrac34\right)^0=1\).`],
    String.raw`\(1,\ 1,\ -1\) and \(1\)`,
  )}
  ${ex(
    "Example 4: Extending a pattern",
    String.raw`Continue the pattern \(5^3,\ 5^2,\ 5^1,\ \dots\) down to \(5^{-2}\).`,
    [String.raw`\(5^3=125\), and each step divides by \(5\): \(5^2=25\), \(5^1=5\), \(5^0=1\).`, String.raw`Keep dividing: \(5^{-1}=\dfrac15\) and \(5^{-2}=\dfrac1{25}\).`],
    String.raw`\(5^{-2}=\dfrac1{25}\), which equals \(\dfrac1{5^2}\)`,
    table(["Power", "5³", "5²", "5¹", "5⁰", "5⁻¹", "5⁻²"], [["Value", "125", "25", "5", "1", "1/5", "1/25"]]),
  )}
  ${ex(
    "Example 5: Negative exponents on integers",
    String.raw`Evaluate \(4^{-3}\) and \((-2)^{-3}\).`,
    [String.raw`\(4^{-3}=\dfrac1{4^3}=\dfrac1{64}\).`, String.raw`\((-2)^{-3}=\dfrac1{(-2)^3}=\dfrac1{-8}=-\dfrac18\). The negative comes from the odd power of a negative base, not from the exponent's sign.`],
    String.raw`\(4^{-3}=\dfrac1{64}\) and \((-2)^{-3}=-\dfrac18\)`,
  )}
  ${ex(
    "Example 6: Negative exponents on fractions",
    String.raw`Evaluate \(\left(\dfrac23\right)^{-2}\) and \(\left(\dfrac15\right)^{-2}\).`,
    [String.raw`Flip the fraction to make the exponent positive: \(\left(\dfrac23\right)^{-2}=\left(\dfrac32\right)^2=\dfrac94\).`, String.raw`\(\left(\dfrac15\right)^{-2}=5^2=25\).`],
    String.raw`\(\left(\dfrac23\right)^{-2}=\dfrac94\) and \(\left(\dfrac15\right)^{-2}=25\)`,
  )}
  ${ex(
    "Example 7: Order of operations",
    String.raw`Evaluate \(3^2-2^3\div4+5^0\).`,
    [String.raw`Powers first: \(3^2=9\), \(2^3=8\), \(5^0=1\), giving \(9-8\div4+1\).`, String.raw`Divide: \(8\div4=2\), giving \(9-2+1\).`, String.raw`Left to right: \(9-2=7\), then \(7+1=8\).`],
    String.raw`\(3^2-2^3\div4+5^0=8\)`,
  )}
  ${ex(
    "Example 8: Comparing powers",
    String.raw`Which is greater, \(2^{-3}\) or \(3^{-2}\)?`,
    [String.raw`\(2^{-3}=\dfrac18\) and \(3^{-2}=\dfrac19\).`, String.raw`For unit fractions, the smaller denominator means the bigger value: \(\dfrac18>\dfrac19\).`],
    String.raw`\(2^{-3}>3^{-2}\)`,
  )}
  ${ex(
    "Example 9: Powers of ten and decimals",
    String.raw`Write \(10^3\), \(10^{-1}\), \(10^{-2}\) and \(10^{-4}\) as ordinary numbers.`,
    [String.raw`\(10^3=1000\).`, String.raw`\(10^{-1}=\dfrac1{10}=0.1\) and \(10^{-2}=\dfrac1{100}=0.01\).`, String.raw`\(10^{-4}=\dfrac1{10\,000}=0.0001\).`],
    String.raw`\(1000,\ 0.1,\ 0.01\) and \(0.0001\) — the exponent counts the places of the decimal`,
  )}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, "negative base", String.raw`Evaluate \((-2)^5\).`, String.raw`Five negatives (odd), so negative: \(-32\).`)}
  ${pr(2, "negative exponent", String.raw`Evaluate \(6^{-2}\).`, String.raw`\(\dfrac1{6^2}=\dfrac1{36}\).`)}
  ${pr(3, "fraction base", String.raw`Evaluate \(\left(\dfrac35\right)^{-2}\).`, String.raw`\(\left(\dfrac53\right)^2=\dfrac{25}9\).`)}
  ${pr(4, "brackets", String.raw`Evaluate \(-4^2+(-4)^2\).`, String.raw`\(-4^2=-16\) and \((-4)^2=16\), so the sum is \(0\).`)}
  ${pr(5, "adding powers", String.raw`Evaluate \(2^{-1}+2^0+2^1\).`, String.raw`\(\dfrac12+1+2=3\dfrac12\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Why is \\(a^0=1\\)?", String.raw`Following the pattern \(a^2,\ a^1,\ a^0\), each step divides by \(a\). Since \(a^1=a\), the next value is \(a\div a=1\).`)}
  ${qa("Q2: Does a negative exponent make the number negative?", String.raw`No. \(a^{-n}\) is the reciprocal of \(a^n\), so \(2^{-3}=\dfrac18\) is positive. Only a negative <em>base</em> with an odd power gives a negative result.`)}
  ${qa("Q3: What is the difference between \\((-2)^4\\) and \\(-2^4\\)?", String.raw`\((-2)^4=16\) because the brackets put the negative inside the base. \(-2^4=-16\): the exponent applies only to \(2\), then the result is negated.`)}
  ${qa("Q4: How do I evaluate \\(\\left(\\dfrac23\\right)^{-2}\\)?", String.raw`Flip the fraction and make the exponent positive: \(\left(\dfrac32\right)^2=\dfrac94\).`)}
  ${qa("Q5: What is \\(0^0\\)?", String.raw`It is undefined — the patterns that give \(a^0=1\) and \(0^n=0\) disagree, so mathematicians do not assign it a value in this course.`)}
</div>`;

export const lessonBlocks = () => [
  html(lessonHtml),
  { id: "b16graph1", type: "graph", expr: "a^x", param: "a", xMin: -3, xMax: 4, yMin: -1, yMax: 16, paramMin: 1, paramMax: 3, paramInit: 2, caption: "y = aˣ — slide the base a and watch how fast it grows" },
];

export const ASSIGNMENT = {
  title: `Assignment ${CODE} — ${TITLE}`,
  description: String.raw`Knowledge & Understanding
1. Evaluate \( 5^3 \).
2. Evaluate \( (-4)^2 \) and \( -4^2 \).
3. Evaluate \( 3^{-2} \).
Thinking
4. Without using a calculator, order \( 2^{-3},\ 2^3,\ 2^0 \) and \( \left(\dfrac12\right)^2 \) from least to greatest. Show the value of each.
5. Find the value of \( n \) in each: (a) \( 5^n=\dfrac1{125} \)  (b) \( 7^n=1 \)  (c) \( \left(\dfrac12\right)^n=8 \).
Communication
6. Use a pattern of powers of \( 3 \) (\( 3^3,\ 3^2,\ 3^1,\ \dots \)) to explain why \( 3^0=1 \).
7. Explain why \( -3^2 \) and \( (-3)^2 \) have different values, and state both values.
Application
8. A bacteria culture has \( P=500\times2^t \) cells after \( t \) hours. Find the number of cells at \( t=3 \) and at \( t=-2 \) (two hours before the count began).
9. A radioactive sample has \( A=80\times\left(\dfrac12\right)^n \) grams after \( n \) half-lives. Find \( A \) when \( n=3 \) and when \( n=-2 \), and say what \( n=-2 \) means.
10. A micrometre is \( 10^{-6} \) m. Write \( 10^{-6} \) as a decimal and as a fraction, and state how many micrometres are in one metre.`,
};

export function bank() {
  const R = rng(1601);
  const { mcA, ms, tf, num, fill } = bankKit(R);
  const K = fracKit();
  const { F, FR, forms } = K;
  const m = (s) => `$${s}$`;
  const pw = (a, n) => Math.pow(a, n);
  const nzp = (lo, hi) => R.int(lo, hi);
  const T = [], add = (d, make, max) => T.push({ d, make, max });
  const dist = (c, extra = []) => { const s = new Set([...extra, -c, c + 1, c - 1, c * 2]); s.delete(c); return [...s]; };

  // easy
  add("easy", () => { const a = R.int(2, 9), n = R.int(2, 4); if (pw(a, n) > 700) return null; const c = pw(a, n); return mcA("easy", `Evaluate ${m(`${a}^{${n}}`)}.`, m(c), [m(a * n), m(pw(a, n - 1)), m(pw(a, n) + a), m(pw(a, n + 1))], "Multiply the base by itself the number of times shown by the exponent."); });
  add("easy", () => { const a = R.int(2, 9); return mcA("easy", `Evaluate ${m(`${a}^0`)}.`, m(1), [m(0), m(a), m(-1)]); }, 2);
  add("easy", () => { const a = R.int(2, 9), n = R.pick([2, 3]); const c = pw(a, n); return fill("easy", `${m(`${a}^{-${n}}`)} as a fraction is ___.`, [`1/${c}`, `\\frac{1}{${c}}`], "A negative exponent means the reciprocal."); });
  add("easy", () => { const a = R.int(2, 6), n = R.pick([2, 4]); const c = pw(a, n); return mcA("easy", `Evaluate ${m(`(-${a})^{${n}}`)}.`, m(c), [m(-c), m(a * n), m(-a * n)], "Even exponent on a bracketed negative gives a positive."); });
  add("easy", () => { const s = R.pick([["$a^0 = 1$ for every non-zero number $a$.", true], ["$2^{-3}$ is a negative number.", false, "$2^{-3} = \\frac{1}{8}$ is positive."], ["$5^2 = 10$.", false, "$5^2 = 25$."], ["$(-3)^2 = 9$.", true], ["$-3^2 = 9$.", false, "$-3^2 = -9$."], ["$10^{-1} = 0.1$.", true], ["$3^{-1} = -3$.", false, "$3^{-1} = \\frac{1}{3}$."]]); return tf("easy", s[0], s[1], s[2] ?? ""); }, 6);
  add("easy", () => { const base = R.pick([2, 3, 4, 5]); const e = R.int(2, 3); const val = pw(base, e); const opts = R.shuffle([[m(`${base}^{${e}}`), true], [m(`${val}`), true], [m(`${base} \\times ${e}`), false], [m(`${base + e}`), false]]); return ms("easy", `Which are equal to ${m(`${base}^{${e}}`)}?`, opts.map((o) => o[0]), opts.map((o, i) => (o[1] ? i : -1)).filter((i) => i >= 0)); }, 2);
  add("easy", () => { const k = R.int(2, 6); return mcA("easy", `Which number equals ${m(`10^{-${k}}`)}?`, m(`0.${"0".repeat(k - 1)}1`), [m(`0.${"0".repeat(k)}1`), m(`-${"1" + "0".repeat(k)}`), m(`${"1" + "0".repeat(k)}`)], "The exponent counts the decimal places."); }, 3);
  add("easy", () => { const a = R.int(2, 5), n = R.int(2, 4); return num("easy", `A square has side length ${a} cm. Its area is ${m(`${a}^2`)} cm². The area is ___ cm².`, a * a, 0); }, 2);

  // medium
  add("medium", () => { const a = R.int(2, 6), n = R.int(2, 3); const c = pw(a, n); return mcA("medium", `Evaluate ${m(`-${a}^{${n}}`)}.`, m(-c), [m(c), m(-a * n), m(a * n)], "Without brackets, the exponent applies to the base only; then negate."); });
  add("medium", () => { const [p, q] = R.pick([[2, 3], [3, 4], [1, 2], [2, 5], [3, 5], [4, 7], [1, 3]]); const n = R.int(2, 3); return fill("medium", `${m(`\\left(\\frac{${p}}{${q}}\\right)^{-${n}}`)} = ___ (fraction in simplest form).`, forms(pw(q, n), pw(p, n)), "Flip the fraction and make the exponent positive."); });
  add("medium", () => { const a = R.int(2, 5), b = R.int(2, 4), c = R.int(2, 6); const v = pw(a, 2) - pw(b, 3) / b + pw(c, 0); if (!Number.isInteger(v)) return null; return num("medium", `Evaluate ${m(`${a}^2 - ${b}^3 \\div ${b} + ${c}^0`)}.`, v, 0, "Powers first, then divide, then add and subtract left to right."); });
  add("medium", () => { const a = R.int(2, 4), b = R.int(2, 4); if (a === b) return null; const v1 = Math.pow(a, -3), v2 = Math.pow(b, -2); const bigger = v1 > v2 ? `${a}^{-3}` : `${b}^{-2}`; const other = v1 > v2 ? `${b}^{-2}` : `${a}^{-3}`; return mcA("medium", `Which is greater: ${m(`${a}^{-3}`)} or ${m(`${b}^{-2}`)}?`, m(bigger), [m(other), "They are equal", "Cannot be compared"], "Rewrite each as a fraction."); });
  add("medium", () => { const a = R.int(2, 5); return ms("medium", `Which are equal to ${m(`${a}^{-2}`)}?`, [m(`\\frac{1}{${a * a}}`), m(`\\frac{1}{${a}^2}`), m(`-${a * a}`), m(`\\left(\\frac{1}{${a}}\\right)^2`)], [0, 1, 3]); }, 2);
  add("medium", () => { const s = R.pick([["$(-5)^0 = 1$.", true], ["$-5^0 = 1$.", false, "$-5^0 = -(5^0) = -1$."], ["$\\left(\\frac{1}{2}\\right)^{-3} = 8$.", true], ["$2^{-2} = -4$.", false, "$2^{-2} = \\frac{1}{4}$."], ["$(-2)^{-2} = \\frac{1}{4}$.", true], ["$4^{-1} = \\frac{1}{4}$.", true]]); return tf("medium", s[0], s[1], s[2] ?? ""); }, 6);
  add("medium", () => { const n = R.int(2, 5), b = R.int(2, 4); return num("medium", `A culture of 5 cells triples every hour. The number of cells after ${n} hours is ${m(`5 \\times 3^{${n}}`)}. The number of cells is ___.`, 5 * pw(3, n), 0); }, 2);
  add("medium", () => { const k = R.int(1, 3), m2 = R.int(2, 4); const x = R.pick([2, 3, 5, 10]); const e = R.int(2, 4); return num("medium", `If ${m(`${x}^n = ${pw(x, e)}`)}, then n = ___.`, e, 0); }, 3);

  // hard
  add("hard", () => { const a = R.int(2, 5); const val = pw(a, 2) + 1 / a; const [n, d] = [pw(a, 3) + 1, a]; return fill("hard", `Evaluate ${m(`${a}^2 + ${a}^{-1}`)} as a fraction or mixed number: ___.`, forms(n, d)); }, 3);
  add("hard", () => { const [p, q] = R.pick([[2, 3], [3, 4], [1, 2], [3, 5]]); const n = R.int(2, 3); const bigNum = pw(q, n), bigDen = pw(p, n); return mcA("hard", `Evaluate ${m(`\\left(-\\frac{${p}}{${q}}\\right)^{-${n}}`)}.`, m(FR(n % 2 === 0 ? bigNum : -bigNum, bigDen)), [m(FR(n % 2 === 0 ? -bigNum : bigNum, bigDen)), m(FR(pw(p, n), pw(q, n) * (n % 2 === 0 ? 1 : -1))), m(FR(bigNum + 1, bigDen))], "Flip the fraction, make the exponent positive, then use the sign rule for the power."); }, 3);
  add("hard", () => { const x = R.int(2, 4), y = R.int(2, 4); if (x === y) return null; const A = Math.pow(x, -2), B = Math.pow(y, -1); const c = [m(`${x}^{-2}`), m(`${y}^{-1}`), m(`${x}^0`), m(`${y}^2`)]; const vals = [A, B, 1, y * y]; const order = [0, 1, 2, 3].sort((i, j) => vals[i] - vals[j]); const lst = (o) => o.map((i) => c[i]).join(", "); return mcA("hard", `Which lists ${c.join(", ")} from least to greatest?`, lst(order), [lst([...order].reverse()), lst([order[1], order[0], order[2], order[3]]), lst([order[0], order[1], order[3], order[2]])]); }, 3);
  add("hard", () => { const s = R.pick([["If $x \\ne 0$, then $x^{-1}$ and $x$ have the same sign.", true], ["$(-1)^n = -1$ for every integer $n$.", false, "$(-1)^2 = 1$."], ["$\\left(\\frac{a}{b}\\right)^{-1} = \\frac{b}{a}$.", true], ["For every base $a > 1$, $a^{-2} < a^0$.", true], ["$2^{-3} + 2^{-3} = 2^{-6}$.", false, "$\\frac{1}{8} + \\frac{1}{8} = \\frac{1}{4} = 2^{-2}$."]]); return tf("hard", s[0], s[1], s[2] ?? ""); }, 5);
  add("hard", () => { const [b, e] = R.pick([[2, 3], [3, 2], [2, 4], [5, 2], [3, 3]]); const v = Math.pow(b, -e); const forms_ = [m(`${b}^{-${e}}`), m(`\\frac{1}{${pw(b, e)}}`), m(`\\left(\\frac{1}{${b}}\\right)^{${e}}`), m(`-${pw(b, e)}`)]; return ms("hard", `Which expressions equal ${m(`${b}^{-${e}}`)}?`, forms_, [0, 1, 2]); }, 2);
  add("hard", () => { const base = R.pick([2, 3, 4]), e = R.int(2, 4); return num("hard", `If ${m(`\\left(\\frac{1}{${base}}\\right)^{n} = ${pw(base, e)}`)}, then n = ___.`, -e, 0, "$\\left(\\frac{1}{a}\\right)^{n} = a^{-n}$."); }, 3);
  add("hard", () => { const k = R.int(2, 5); return num("hard", `Evaluate ${m(`10^{${k}} \\times 10^{-${k}}`)} (use what you know about reciprocals).`, 1, 0, "A number times its reciprocal is 1."); }, 1);

  return fillBank(T, 20);
}

const wLesson = [
  ["Powers and brackets", String.raw`$a^n$ means $n$ copies of $a$ multiplied together. Brackets decide the base: $(-2)^4=16$ but $-2^4=-16$. A bracketed negative base with an even exponent is positive; with an odd exponent it is negative.`],
  ["Zero and negative exponents", String.raw`For $a\ne0$: $a^0=1$ and $a^{-n}=\dfrac1{a^n}$ — a negative exponent means the <b>reciprocal</b>, not a negative number. For fractions, flip: $\left(\dfrac23\right)^{-2}=\left(\dfrac32\right)^2$.`],
  ["Order of operations", String.raw`Do brackets, then exponents, then multiply and divide left to right, then add and subtract left to right.`],
];
const wExamples = [
  ["Example 1: Evaluate a power", String.raw`Evaluate $3^4$.`, String.raw`$3\times3\times3\times3=81$.`],
  ["Example 2: A power of ten", String.raw`Evaluate $10^5$.`, String.raw`$1$ followed by five zeros: $100\,000$.`],
  ["Example 3: Brackets", String.raw`Compare $(-5)^2$ and $-5^2$.`, String.raw`$(-5)^2=25$ but $-5^2=-(5^2)=-25$.`],
  ["Example 4: Odd exponent", String.raw`Evaluate $(-2)^5$.`, String.raw`Five negatives, so negative: $-32$.`],
  ["Example 5: Zero exponent", String.raw`Evaluate $9^0+(-9)^0$.`, String.raw`$1+1=2$.`],
  ["Example 6: A negative exponent", String.raw`Evaluate $2^{-4}$.`, String.raw`$\dfrac1{2^4}=\dfrac1{16}$.`],
  ["Example 7: A fraction base", String.raw`Evaluate $\left(\dfrac13\right)^{-3}$.`, String.raw`$3^3=27$.`],
  ["Example 8: As a decimal", String.raw`Write $5^{-2}$ as a decimal.`, String.raw`$\dfrac1{25}=0.04$.`],
  ["Example 9: Order of operations", String.raw`Evaluate $6^2-3^3+2^0$.`, String.raw`$36-27+1=10$.`],
];
const wQuestions = [
  ["Problem 1", String.raw`Evaluate $4^3$.`, String.raw`$64$`, 3.0],
  ["Problem 2", String.raw`Evaluate $(-3)^3$.`, String.raw`$-27$`, 3.0],
  ["Problem 3", String.raw`Evaluate $-3^4$ and $(-3)^4$.`, String.raw`$-81$ and $81$`, 3.0],
  ["Problem 4", String.raw`Evaluate $8^0+(-8)^0$.`, String.raw`$2$`, 3.0],
  ["Problem 5", String.raw`Write $10^{-3}$ as a fraction and as a decimal.`, String.raw`$\dfrac1{1000}=0.001$`, 3.2],
  ["Problem 6", String.raw`Evaluate $2^{-5}$.`, String.raw`$\dfrac1{32}$`, 3.0],
  ["Problem 7", String.raw`Evaluate $\left(\dfrac32\right)^{-3}$.`, String.raw`$\left(\dfrac23\right)^3=\dfrac8{27}$`, 3.2],
  ["Problem 8", String.raw`Evaluate $\left(-\dfrac14\right)^{-2}$.`, String.raw`$(-4)^2=16$`, 3.2],
  ["Problem 9", String.raw`Evaluate $5^2-2^{-2}$.`, String.raw`$25-\dfrac14=24\dfrac34$`, 3.4],
  ["Problem 10", String.raw`Evaluate $3\times2^3-4^2\div2$.`, String.raw`$24-8=16$`, 3.2],
  ["Problem 11", String.raw`Which is greater, $4^{-2}$ or $2^{-3}$? Show the values.`, String.raw`$\dfrac1{16}<\dfrac18$, so $2^{-3}$ is greater`, 3.4],
  ["Problem 12", String.raw`A colony has $36\times3^t$ cells after $t$ days. Find the number of cells at $t=3$ and at $t=-2$.`, String.raw`$972$ cells and $4$ cells`, 3.6],
  ["Problem 13 --- Challenge", String.raw`Find $n$: (a) $3^n=\dfrac1{81}$  (b) $\left(\dfrac12\right)^n=32$.`, String.raw`(a) $n=-4$  (b) $n=-5$`, 3.8],
];
const ws = packWorksheet({
  code: CODE, title: TITLE,
  intro: "A power is repeated multiplication, and zero and negative exponents extend the pattern: each step down divides by the base. This worksheet practises evaluating powers, brackets with negative bases, and zero and negative exponents.",
  bigideas: String.raw`A negative exponent means <b>take the reciprocal</b>, it does not make the answer negative. $a^0=1$ for every non-zero $a$.`,
  lesson: wLesson, examples: wExamples, questions: wQuestions,
});
export const WORKSHEET_CONTENT = ws.content;
export const WORKSHEET_TEX = ws.texData;
